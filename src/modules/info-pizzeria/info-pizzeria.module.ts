import { Module } from '@nestjs/common';
import { InfoPizzeriaService } from './info-pizzeria.service';
import { InfoPizzeriaController } from './info-pizzeria.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaExceptionHandlerService } from 'src/common';

@Module({
  controllers: [InfoPizzeriaController],
  providers: [InfoPizzeriaService, PrismaExceptionHandlerService],
})
export class InfoPizzeriaModule { }
