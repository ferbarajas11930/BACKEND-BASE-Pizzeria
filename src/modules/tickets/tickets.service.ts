import { BadRequestException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';
import { Pedido } from '../pedidos/entities/pedido.entity';

@Injectable()
export class TicketsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaExceptionHandler: PrismaExceptionHandlerService,
  ) { }

  async create(createTicketDto: CreateTicketDto) {
    try {
      // 1. Validar si ya existe un ticket para este pedido (Evita duplicados)
      const ticketExistente = await this.prisma.tickets.findUnique({
        where: { pedidoId: createTicketDto.pedidoId }
      });
      if (ticketExistente) {
        throw new BadRequestException(`El pedido con ID ${createTicketDto.pedidoId} ya tiene un ticket generado.`);
      }
      // 2. Buscar el pedido incluyendo sus detalles (productos y precios)
    
      const pedido = await this.prisma.pedidos.findUnique({
        where: { id: createTicketDto.pedidoId },
        include: { detalles: true } // Verifica que incluya los detalles para el cálculo correcto
      });
      // 3. Si el pedido no existe entonces no se puede generar el ticket
      if (!pedido) {
        throw new NotFoundException(`Pedido con id ${createTicketDto.pedidoId} no encontrado`);
      }
      // 4. Calcular el subtotal sumando (cantidad * precioUnitario) de cada detalle
      const subtotal = pedido.detalles.reduce((acc, item) => {
        return acc + (item.cantidad * item.precioUnitario);
      }, 0);
      // 5. Definir lógica de impuestos (IVA 16%) y otros montos
      const iva = subtotal * 0.16;
      const descuento = createTicketDto.descuento || 0;
      const envio = createTicketDto.tarifaEnvio || 0;
      const total = (subtotal + iva + envio) - descuento;
      // 6. Crear el registro final en la base de datos
      return await this.prisma.tickets.create({
        data: {
          pedidoId: createTicketDto.pedidoId,
          subtotal,
          iva,
          total,
          descuento,
          tarifaEnvio: envio
        },
        include: { pedido: true },
      });
    } catch (error) {
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        throw error;
      }
      return this.prismaExceptionHandler.handleDBException(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const total = await this.prisma.tickets.count();
    const paginaActual = paginationDto.page || 1;
    const porPagina = paginationDto.limit || 10;

    return {
      data: await this.prisma.tickets.findMany({
        skip: (paginaActual - 1) * porPagina,
        take: porPagina,
        orderBy: { fechaHora: 'desc' },
        include: { pedido: true, caja: true },
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
    const ticket = await this.prisma.tickets.findUnique({
      where: { id },
      include: { pedido: true, caja: true },
    });
    if (!ticket) {
      throw {
        statusCode: HttpStatus.NOT_FOUND,
        message: `Ticket con el id ${id} no fue encontrado`,
      };
    }
    return ticket;
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    try {
      return await this.prisma.tickets.update({
        where: { id },
        data: updateTicketDto,
      });
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);
      return await this.prisma.tickets.delete({ where: { id } });
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }
}
