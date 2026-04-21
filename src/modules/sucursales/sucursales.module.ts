import { Module } from '@nestjs/common';
import { SucursalesService } from './sucursales.service';
import { SucursalesController } from './sucursales.controller';
import { PrismaExceptionHandlerService } from 'src/common';

@Module({
  controllers: [SucursalesController],
  providers: [SucursalesService, PrismaExceptionHandlerService],
})
export class SucursalesModule {}
