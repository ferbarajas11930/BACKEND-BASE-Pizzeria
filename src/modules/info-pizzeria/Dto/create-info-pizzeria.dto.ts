import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateInfoPizzeriaDto {

    @IsString()
    nombre: string;

    @IsString()
    telefono: string

    @IsString()
    dueno: string

    @IsString()
    correo: string

    @IsString()
    logo: string
}
