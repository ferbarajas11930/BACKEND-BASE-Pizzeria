import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateDetallePedidoDto } from './dto/create-detalle-pedido.dto';
import { UpdateDetallePedidoDto } from './dto/update-detalle-pedido.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';

@Injectable()
export class DetallePedidoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaExceptionHandler: PrismaExceptionHandlerService,
  ) {}

  async create(createDetallePedidoDto: CreateDetallePedidoDto) {
    try {
      return await this.prisma.detallePedido.create({
        data: createDetallePedidoDto,
        include: { menu: true, pedido: true },
      });
    } catch (error) {
      return this.prismaExceptionHandler.handleDBException(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const total = await this.prisma.detallePedido.count();
    const paginaActual = paginationDto.page || 1;
    const porPagina = paginationDto.limit || 10;

    return {
      data: await this.prisma.detallePedido.findMany({
        skip: (paginaActual - 1) * porPagina,
        take: porPagina,
        include: { menu: true, pedido: true },
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
    const detalle = await this.prisma.detallePedido.findUnique({
      where: { id },
      include: { menu: true, pedido: true },
    });
    if (!detalle) {
      throw {
        statusCode: HttpStatus.NOT_FOUND,
        message: `Detalle de pedido con el id ${id} no fue encontrado`,
      };
    }
    return detalle;
  }

  async update(id: string, updateDetallePedidoDto: UpdateDetallePedidoDto) {
    try {
      return await this.prisma.detallePedido.update({
        where: { id },
        data: updateDetallePedidoDto,
      });
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);
      return await this.prisma.detallePedido.delete({ where: { id } });
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }
}
