import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';

@Injectable()
export class ClientesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaExceptionHandler: PrismaExceptionHandlerService,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    try {
      const cliente = await this.prisma.clientes.create({
        data: createClienteDto,
      });
      return cliente;
    } catch (error) {
      return this.prismaExceptionHandler.handleDBException(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const total = await this.prisma.clientes.count();
    const paginaActual = paginationDto.page || 1;
    const porPagina = paginationDto.limit || 10;

    return {
      data: await this.prisma.clientes.findMany({
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
    const cliente = await this.prisma.clientes.findUnique({
      where: { id },
    });
    if (!cliente) {
      throw {
        statusCode: HttpStatus.NOT_FOUND,
        message: `Cliente con el id ${id} no fue encontrado`,
      };
    }
    return cliente;
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    try {
      return await this.prisma.clientes.update({
        where: { id },
        data: updateClienteDto,
      });
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);
      const cliente = await this.prisma.clientes.update({
        where: { id },
        data: { disponible: false },
      });

      if (cliente.disponible === false) {
        return {
          statusCode: HttpStatus.OK,
          message: `El cliente ${cliente.nombre} se ha eliminado correctamente`,
        };
      }

      return cliente;
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }
}
