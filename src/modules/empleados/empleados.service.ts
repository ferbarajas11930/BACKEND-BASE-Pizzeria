import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';

@Injectable()
export class EmpleadosService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaExceptionHandler: PrismaExceptionHandlerService,
  ) {}

  async create(createEmpleadoDto: CreateEmpleadoDto) {
    try {
      return await this.prisma.empleados.create({
        data: {
          ...createEmpleadoDto,
          fechaNacimiento: new Date(createEmpleadoDto.fechaNacimiento),
        },
      });
    } catch (error) {
      return this.prismaExceptionHandler.handleDBException(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const total = await this.prisma.empleados.count();
    const paginaActual = paginationDto.page || 1;
    const porPagina = paginationDto.limit || 10;

    return {
      data: await this.prisma.empleados.findMany({
        skip: (paginaActual - 1) * porPagina,
        take: porPagina,
        orderBy: { apellido: 'asc' },
        where: { disponible: true },
        include: { sucursal: true },
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
    const empleado = await this.prisma.empleados.findUnique({
      where: { id },
      include: { sucursal: true },
    });
    if (!empleado) {
      throw {
        statusCode: HttpStatus.NOT_FOUND,
        message: `Empleado con el id ${id} no fue encontrado`,
      };
    }
    return empleado;
  }

  async update(id: string, updateEmpleadoDto: UpdateEmpleadoDto) {
    try {
      const data: any = { ...updateEmpleadoDto };
      if (updateEmpleadoDto.fechaNacimiento) {
        data.fechaNacimiento = new Date(updateEmpleadoDto.fechaNacimiento);
      }
      return await this.prisma.empleados.update({
        where: { id },
        data,
      });
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);
      const empleado = await this.prisma.empleados.update({
        where: { id },
        data: { disponible: false },
      });

      if (empleado.disponible === false) {
        return {
          statusCode: HttpStatus.OK,
          message: `El empleado ${empleado.nombre} ${empleado.apellido} se ha eliminado correctamente`,
        };
      }

      return empleado;
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }
}
