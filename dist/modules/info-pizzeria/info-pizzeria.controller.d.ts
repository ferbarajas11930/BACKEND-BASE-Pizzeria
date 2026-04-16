import { InfoPizzeriaService } from './info-pizzeria.service';
import { CreateInfoPizzeriaDto } from './Dto/create-info-pizzeria.dto';
import { UpdateInfoPizzeriaDto } from './Dto/update-info-pizzeria.dto';
export declare class InfoPizzeriaController {
    private readonly infoPizzeriaService;
    constructor(infoPizzeriaService: InfoPizzeriaService);
    create(createInfoPizzeriaDto: CreateInfoPizzeriaDto): Promise<import("@nestjs/common").HttpException | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        telefono: string;
        dueno: string;
        correo: string;
        logo: string;
    }>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        telefono: string;
        dueno: string;
        correo: string;
        logo: string;
    }>;
    update(id: string, updateInfoPizzeriaDto: UpdateInfoPizzeriaDto): Promise<import("@nestjs/common").HttpException | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        telefono: string;
        dueno: string;
        correo: string;
        logo: string;
    }>;
    remove(id: string): Promise<import("@nestjs/common").HttpException | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        telefono: string;
        dueno: string;
        correo: string;
        logo: string;
    }>;
}
