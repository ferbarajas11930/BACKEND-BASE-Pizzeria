import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { PrismaExceptionHandlerService } from 'src/common';

@Module({
  controllers: [PedidosController],
  providers: [PedidosService, PrismaExceptionHandlerService],
})
export class PedidosModule {}
