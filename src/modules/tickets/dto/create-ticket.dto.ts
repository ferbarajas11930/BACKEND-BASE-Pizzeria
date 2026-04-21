import { IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreateTicketDto {
  @IsUUID()
  pedidoId: string;

  @IsOptional()
  @IsNumber()
  descuento?: number;

  @IsOptional()
  @IsNumber()
  tarifaEnvio?: number;

  // subtotal, iva y total ya no se reciben por el cliente
}