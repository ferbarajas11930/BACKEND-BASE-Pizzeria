import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';

@Injectable()
export class TicketsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaExceptionHandler: PrismaExceptionHandlerService,
  ) {}

  async create(createTicketDto: CreateTicketDto) {
    try {
      return await this.prisma.tickets.create({
        data: createTicketDto,
        include: { pedido: true },
      });
    } catch (error) {
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
