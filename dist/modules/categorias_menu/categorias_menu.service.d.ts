import { CreateCategoriasMenuDto } from './Dto/create-categorias_menu.dto';
import { UpdateCategoriasMenuDto } from './Dto/update-categorias_menu.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaExceptionHandlerService } from 'src/common';
export declare class CategoriasMenuService {
    private readonly prisma;
    private readonly prismaExceptionHandlerService;
    constructor(prisma: PrismaService, prismaExceptionHandlerService: PrismaExceptionHandlerService);
    create(createCategoriasMenuDto: CreateCategoriasMenuDto): Promise<import("@nestjs/common").HttpException | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombreCategoria: string;
        descripcion: string;
    }>;
    findAll(): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            disponible: boolean;
            nombreCategoria: string;
            descripcion: string;
        }[];
        meta: {
            totalPaginas: number;
            paginaActual: number;
            porPagina: number;
        };
    }>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombreCategoria: string;
        descripcion: string;
    }>;
    update(id: string, updateCategoriasMenuDto: UpdateCategoriasMenuDto): Promise<import("@nestjs/common").HttpException | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombreCategoria: string;
        descripcion: string;
    }>;
    remove(id: string): Promise<import("@nestjs/common").HttpException | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombreCategoria: string;
        descripcion: string;
    }>;
}
