import { PrismaService } from 'src/database/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(registerUserDto: RegisterUserDto): Promise<{
        token: string;
        name: string;
        role: import("@prisma/client").$Enums.UserRole;
        username: string;
        password: string;
        id: string;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        id: string;
        username: string;
        token: string;
    }>;
    verifyToken(token: string): Promise<{
        name: string;
        role: import("@prisma/client").$Enums.UserRole;
        username: string;
        password: string;
        id: string;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    private getJwtToken;
    private handleDBException;
}
