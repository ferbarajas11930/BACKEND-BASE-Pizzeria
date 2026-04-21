import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { FormaPago } from '@prisma/client';

export class CreateCajaDto {
  @IsUUID()
  ticketId: string;

  @IsEnum(FormaPago)
  formaPago: FormaPago;

  @IsOptional()
  @IsString()
  referenciaPago?: string;
}
