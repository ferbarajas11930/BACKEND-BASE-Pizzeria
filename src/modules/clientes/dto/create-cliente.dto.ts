import { IsEmail, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  nombre: string;

  @IsString()
  telefono: string;

  @IsEmail()
  email: string;

  @IsString()
  direccion: string;
}
