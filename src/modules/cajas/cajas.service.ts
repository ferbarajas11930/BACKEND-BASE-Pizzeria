import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';

@Injectable()
export class CajasService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaExceptionHandler: PrismaExceptionHandlerService,
  ) {}

  async create(createCajaDto: CreateCajaDto) {
    try {
      return await this.prisma.cajas.create({
        data: createCajaDto,
        include: { ticket: true },
      });
    } catch (error) {
      return this.prismaExceptionHandler.handleDBException(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const total = await this.prisma.cajas.count();
    const paginaActual = paginationDto.page || 1;
    const porPagina = paginationDto.limit || 10;

    return {
      data: await this.prisma.cajas.findMany({
        skip: (paginaActual - 1) * porPagina,
        take: porPagina,
        orderBy: { fechaPago: 'desc' },
        include: { ticket: true },
      }),
      meta: {
        total,
        pagina: paginaActual,
        registros: porPagina,
        totalPaginas: Math.ceil(total / porPagina),
      },
    };
  }

  async findOne(id: string) {
    const caja = await this.prisma.cajas.findUnique({
      where: { id },
      include: { ticket: true },
    });
    if (!caja) {
      throw {
        statusCode: HttpStatus.NOT_FOUND,
        message: `Caja con el id ${id} no fue encontrada`,
      };
    }
    return caja;
  }

  async update(id: string, updateCajaDto: UpdateCajaDto) {
    try {
      return await this.prisma.cajas.update({
        where: { id },
        data: updateCajaDto,
      });
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);
      return await this.prisma.cajas.delete({ where: { id } });
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }
}
