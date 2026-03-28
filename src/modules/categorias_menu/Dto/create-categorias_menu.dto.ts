import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateCategoriasMenuDto {

@IsString()
nombreCategoria: string;

@IsString()
descripcion: string;

@IsOptional()
@IsBoolean()
disponible?: boolean = true;

}