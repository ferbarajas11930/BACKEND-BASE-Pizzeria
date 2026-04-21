import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateSucursalDto } from './dto/create-sucursal.dto';
import { UpdateSucursalDto } from './dto/update-sucursal.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';

@Injectable()
export class SucursalesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaExceptionHandler: PrismaExceptionHandlerService,
  ) {}

  async create(createSucursalDto: CreateSucursalDto) {
    try {
      return await this.prisma.sucursales.create({
        data: createSucursalDto,
      });
    } catch (error) {
      return this.prismaExceptionHandler.handleDBException(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const total = await this.prisma.sucursales.count();
    const paginaActual = paginationDto.page || 1;
    const porPagina = paginationDto.limit || 10;

    return {
      data: await this.prisma.sucursales.findMany({
        skip: (paginaActual - 1) * porPagina,
        take: porPagina,
        orderBy: { nombre: 'asc' },
        where: { disponible: true },
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
    const sucursal = await this.prisma.sucursales.findUnique({
      where: { id },
    });
    if (!sucursal) {
      throw {
        statusCode: HttpStatus.NOT_FOUND,
        message: `Sucursal con el id ${id} no fue encontrada`,
      };
    }
    return sucursal;
  }

  async update(id: string, updateSucursalDto: UpdateSucursalDto) {
    try {
      return await this.prisma.sucursales.update({
        where: { id },
        data: updateSucursalDto,
      });
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);
      const sucursal = await this.prisma.sucursales.update({
        where: { id },
        data: { disponible: false },
      });

      if (sucursal.disponible === false) {
        return {
          statusCode: HttpStatus.OK,
          message: `La sucursal ${sucursal.nombre} se ha eliminado correctamente`,
        };
      }

      return sucursal;
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }
}
