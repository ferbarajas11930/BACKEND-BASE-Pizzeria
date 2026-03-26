import { HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaExceptionHandler: PrismaExceptionHandlerService,
  ) { }

  async findAll(paginationDto: PaginationDto) {
    const totalPages = await this.prisma.user.count({});

    const currentPage = paginationDto.page || 1;
    const perPage = paginationDto.limit || 10;

    return {
      data: await this.prisma.user.findMany({
        skip: (currentPage - 1) * perPage,
        take: perPage,
        where: {
          available: true,
        },
      }),
      meta: {
        total: totalPages,
        page: currentPage,
        perPage: perPage,
        totalPages: Math.ceil(totalPages / perPage),
      },
    };
  }

  findOne(id: string) {
    const user = this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw {
        statusCode: HttpStatus.NOT_FOUND,
        message: `User with id ${id} not found`,
      };
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      return await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }

  remove(id: string) {
    try {
      return this.prisma.user.update({
        where: { id },
        data: { available: false },
      });
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }
}
