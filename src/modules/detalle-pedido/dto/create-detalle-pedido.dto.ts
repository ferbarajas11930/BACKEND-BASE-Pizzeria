import { IsArray, IsInt, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateDetallePedidoDto {
  @IsUUID()
  pedidoId: string;

  @IsUUID()
  menuId: string;

  @IsInt()
  cantidad: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  extras?: string[];

  @IsString()
  termino: string;

  // Se elimina el campo precioUnitario de aquí para evitar entrada manual
}