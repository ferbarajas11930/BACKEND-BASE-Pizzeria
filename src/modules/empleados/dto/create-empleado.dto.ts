import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  @ApiProperty({example: 'Daniel'})
  nombre: string;

  @IsString()
  @ApiProperty({example: 'Gonzalez'})
  apellido: string;

  @IsString()
  @ApiProperty({example: 'Empleado'})
  puesto: string;

  @IsDateString()
  @ApiProperty({example: '28/08/2000'})
  fechaNacimiento: string;

  @IsString()
  @ApiProperty({example: 'Av. Juan'})
  domicilio: string;

  @IsString()
  @ApiProperty({example: '31710004555'})
  telefono: string;

  @IsEmail()
  @ApiProperty({example: 'daniel@gmail.com'})
  correo: string;

  @IsString()
  @ApiProperty({example: '2222222'})
  numEmergencia: string;

  @IsString()
  @ApiProperty({example: 'A-'})
  tipoSangre: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({example: 'Invalido'})
  discapacidad?: boolean;

  @IsString()
  @ApiProperty({example: 'Masculino'})
  genero: string;

  @IsUUID()
  @ApiProperty({example:'675ace67-6b00-42ee-9ba2-c06939a3334f'})
  sucursalId: string;
}
