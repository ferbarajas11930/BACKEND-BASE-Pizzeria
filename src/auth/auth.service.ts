import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) { }

  async register(registerUserDto: RegisterUserDto) {
    try {
      const { password, ...userData } = registerUserDto;
      const hashedPassword = bcrypt.hashSync(password, 10);

      const user = await this.prisma.user.create({
        data: {
          ...userData,
          password: hashedPassword,
        },
      });

      return {
        ...user,
        token: this.getJwtToken({ id: user.id, username: user.username, role: user.role }),
      };
    } catch (error) {
      this.handleDBException(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { username, password } = loginUserDto;
    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (!user)
      throw new UnauthorizedException('Invalid credentials - Username');

    if (!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException('Invalid credentials - Password');

    return {
      id: user.id,
      username: user.username,
      token: this.getJwtToken({ id: user.id, username: user.username, role: user.role }),
    };
  }

  async verifyToken(token: string) {
    try {
      const decoded = this.jwtService.verify<JwtPayload>(token);
      const user = await this.prisma.user.findUnique({
        where: { id: decoded.id },
      });
      if (!user) throw new UnauthorizedException('Invalid token');
      return user;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

  private getJwtToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  private handleDBException(error: any): never {
    if (error.code === 'P2002')
      throw new BadRequestException('Duplicate entry');
    console.error(error);
    throw new InternalServerErrorException('Unexpected error, check logs');
  }
}
