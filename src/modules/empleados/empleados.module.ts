import { Module } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmpleadosController } from './empleados.controller';
import { PrismaExceptionHandlerService } from 'src/common';

@Module({
  controllers: [EmpleadosController],
  providers: [EmpleadosService, PrismaExceptionHandlerService],
})
export class EmpleadosModule {}
