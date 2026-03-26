import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateCategoriasMenuDto {

@IsString()
nombreCategoria: string;

@IsString()
descripcion: string;

@IsOptional()
disponible: boolean=true;

}