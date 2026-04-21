import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

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

  @IsNumber()
  precioUnitario: number;
}
