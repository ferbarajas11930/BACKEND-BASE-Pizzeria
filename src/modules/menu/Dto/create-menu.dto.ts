import { IsArray, IsBoolean, IsNumber, IsOptional, IsString, IsUUID, Min } from "class-validator";

export class CreateMenuDto {
    @IsString()
    nombre: string;

    @IsNumber()
    @Min(0)
    precio: number; 

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    ingredientes: string[]; 

    @IsString()
    tamano: string;

    @IsBoolean()
    @IsOptional()
    disponible?: boolean = true;

    @IsUUID()
    categoriaId: string; 
}

