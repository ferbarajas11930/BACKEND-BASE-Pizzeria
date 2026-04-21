import { Module } from '@nestjs/common';
import { CajasService } from './cajas.service';
import { CajasController } from './cajas.controller';
import { PrismaExceptionHandlerService } from 'src/common';

@Module({
  controllers: [CajasController],
  providers: [CajasService, PrismaExceptionHandlerService],
})
export class CajasModule {}
