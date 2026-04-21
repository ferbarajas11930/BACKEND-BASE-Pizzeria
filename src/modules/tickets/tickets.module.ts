import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { PrismaExceptionHandlerService } from 'src/common';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService, PrismaExceptionHandlerService],
})
export class TicketsModule {}
