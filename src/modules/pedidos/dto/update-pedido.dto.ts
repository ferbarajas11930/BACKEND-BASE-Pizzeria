import { IsEnum, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { CreatePedidoDto } from './create-pedido.dto';
import { EstadoPedido } from '@prisma/client';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
  @IsOptional()
  @IsEnum(EstadoPedido)
  estado?: EstadoPedido;
}
