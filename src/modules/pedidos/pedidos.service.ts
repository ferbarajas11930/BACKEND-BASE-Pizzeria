import { HttpStatus, Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';

@Injectable()
export class PedidosService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaExceptionHandler: PrismaExceptionHandlerService,
  ) {}

  async create(createPedidoDto: CreatePedidoDto) {
    try {
      return await this.prisma.pedidos.create({
        data: createPedidoDto,
        include: { cliente: true, sucursal: true },
      });
    } catch (error) {
      return this.prismaExceptionHandler.handleDBException(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const total = await this.prisma.pedidos.count();
    const paginaActual = paginationDto.page || 1;
    const porPagina = paginationDto.limit || 10;

    return {
      data: await this.prisma.pedidos.findMany({
        skip: (paginaActual - 1) * porPagina,
        take: porPagina,
        orderBy: { fechaHora: 'desc' },
        where: { disponible: true },
        include: { cliente: true, sucursal: true, detalles: true },
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
    const pedido = await this.prisma.pedidos.findUnique({
      where: { id },
      include: {
        cliente: true,
        sucursal: true,
        detalles: { include: { menu: true } },
        ticket: true,
      },
    });
    if (!pedido) {
      throw {
        statusCode: HttpStatus.NOT_FOUND,
        message: `Pedido con el id ${id} no fue encontrado`,
      };
    }
    return pedido;
  }

  async update(id: string, updatePedidoDto: UpdatePedidoDto) {
    try {
      return await this.prisma.pedidos.update({
        where: { id },
        data: updatePedidoDto,
      });
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);
      const pedido = await this.prisma.pedidos.update({
        where: { id },
        data: { disponible: false },
      });

      if (pedido.disponible === false) {
        return {
          statusCode: HttpStatus.OK,
          message: `El pedido #${pedido.numeroPedido} se ha cancelado correctamente`,
        };
      }

      return pedido;
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }
}
