import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateProveedoresDto {

    @IsString()
    nombreProveedor: string;

    @IsString()
    telefonoProveedor: string;

    @IsString()
    domicilioProveedor: string;

    @IsString()
    rfcProveedor: string;

    @IsString()
    emailProveedor: string;

    @IsString()
    tipoProducto: string;

    @IsBoolean()
    @IsOptional()
    disponible: boolean = true;

}