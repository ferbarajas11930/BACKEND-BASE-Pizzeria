import { Module } from '@nestjs/common';
import { DetallePedidoService } from './detalle-pedido.service';
import { DetallePedidoController } from './detalle-pedido.controller';
import { PrismaExceptionHandlerService } from 'src/common';

@Module({
  controllers: [DetallePedidoController],
  providers: [DetallePedidoService, PrismaExceptionHandlerService],
})
export class DetallePedidoModule {}
