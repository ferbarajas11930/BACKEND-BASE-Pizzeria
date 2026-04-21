import { IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreateTicketDto {
  @IsUUID()
  pedidoId: string;

  @IsNumber()
  subtotal: number;

  @IsNumber()
  iva: number;

  @IsNumber()
  total: number;

  @IsOptional()
  @IsNumber()
  descuento?: number;

  @IsOptional()
  @IsNumber()
  tarifaEnvio?: number;
}
