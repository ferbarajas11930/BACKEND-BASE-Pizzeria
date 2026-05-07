import { Module } from '@nestjs/common';
import { TicketsReportService } from './tickets-report.service';
import { TicketsReportController } from './tickets-report.controller';
import { PrismaExceptionHandlerService } from 'src/common';

import { PrinterModule } from '../printer/printer.module';
import { TicketsModule } from '../tickets/tickets.module';

@Module({
  controllers: [TicketsReportController],
  providers: [TicketsReportService, PrismaExceptionHandlerService],
  imports: [PrinterModule, TicketsModule],
})
export class TicketsReportModule {}
