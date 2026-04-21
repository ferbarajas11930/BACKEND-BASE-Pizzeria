import { IsString } from 'class-validator';

export class CreateSucursalDto {
  @IsString()
  nombre: string;

  @IsString()
  direccion: string;

  @IsString()
  responsable: string;

  @IsString()
  telefono: string;

  @IsString()
  municipio: string;

  @IsString()
  estado: string;

  @IsString()
  cp: string;

  @IsString()
  horario: string;
}
