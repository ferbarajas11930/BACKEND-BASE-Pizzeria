import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { PrismaExceptionHandlerService } from 'src/common';

@Module({
  controllers: [ClientesController],
  providers: [ClientesService, PrismaExceptionHandlerService],
})
export class ClientesModule {}
