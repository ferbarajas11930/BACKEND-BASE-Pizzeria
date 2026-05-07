import { Injectable } from '@nestjs/common';
import { PrinterService } from '../printer/printer.service';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaExceptionHandlerService } from 'src/common';
import { getTicketReport } from '../reports/ticket.report';
import { getHelloWorldReport } from '../reports/hellow-world.report';

@Injectable()
export class TicketsReportService {
  constructor(
    private readonly printerService: PrinterService,
    private readonly prisma: PrismaService,
    private readonly prismaExceptionHandler: PrismaExceptionHandlerService,
  ) { }

  async helloweorld() {
    try {
      const docDefinition = getHelloWorldReport({ name: 'Jacob' });

      const doc = this.printerService.creatPdf(docDefinition);
      return doc;
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }

  async ticketReport(ticketID: string) {
    try {
      // 1. Busca el ticket con todas las relaciones necesarias
      const ticket = await this.prisma.tickets.findUnique({
        where: { id: ticketID },
        include: {
          pedido: {
            include: {
              cliente: true,
              detalles: {
                include: { menu: true } // Para traer el nombre de la pizza
              }
            }
          }
        }
      });

      if (!ticket) throw new Error(`Ticket ${ticketID} no encontrado`);

      // 2. Trae la información de la pizzería 
      const infoPizzeria = await this.prisma.infoPizzeria.findFirst();

      // 3. Genera el PDF
      const docDefinition = getTicketReport({ ticket, infoPizzeria });

      const doc = this.printerService.creatPdf(docDefinition);
      return doc;
    } catch (error) {
      this.prismaExceptionHandler.handleDBException(error);
      throw error;
    }
  }
}
