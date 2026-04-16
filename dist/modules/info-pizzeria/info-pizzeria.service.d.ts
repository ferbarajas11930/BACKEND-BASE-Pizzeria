import { CreateInfoPizzeriaDto } from './Dto/create-info-pizzeria.dto';
import { UpdateInfoPizzeriaDto } from './Dto/update-info-pizzeria.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaExceptionHandlerService } from 'src/common';
export declare class InfoPizzeriaService {
    private readonly prisma;
    private readonly prismaExceptionHandler;
    constructor(prisma: PrismaService, prismaExceptionHandler: PrismaExceptionHandlerService);
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
