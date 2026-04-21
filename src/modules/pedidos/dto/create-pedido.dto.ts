import { IsEnum, IsInt, IsOptional, IsUUID } from 'class-validator';
import { TipoEntrega } from '@prisma/client';

export class CreatePedidoDto {
  @IsOptional()
  @IsInt()
  numeroMesa?: number;

  @IsUUID()
  clienteId: string;

  @IsUUID()
  sucursalId: string;

  @IsEnum(TipoEntrega)
  tipoEntrega: TipoEntrega;
}
