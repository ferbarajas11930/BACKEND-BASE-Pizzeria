import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { TicketsReportService } from './tickets-report.service';
import { get } from 'http';

@Controller('tickets-report')
export class TicketsReportController {
  constructor(private readonly ticketsReportService: TicketsReportService) {}

  @Get('/helloworld')
  async getHelloWorldReport(@Res() response: Response) {
    const pdfDoc = await this.ticketsReportService.helloweorld();
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hello World Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get(':ticketID')
  async getTicketReport(
    @Res() response: Response,
    @Param('ticketID') ticketID: string,
  ) {
    const pdfDoc = await this.ticketsReportService.ticketReport(ticketID);
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = `Ticket Report ${ticketID}`;
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
