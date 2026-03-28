import { CreateMenuDto } from './Dto/create-menu.dto';
import { UpdateMenuDto } from './Dto/update-menu.dto';
import { PrismaService } from "src/database/prisma.service";
import { PaginationDto, PrismaExceptionHandlerService } from "src/common";
export declare class MenuService {
    private readonly prisma;
    private readonly prismaExceptionHandler;
    constructor(prisma: PrismaService, prismaExceptionHandler: PrismaExceptionHandlerService);
    create(createMenuDto: CreateMenuDto): Promise<import("@nestjs/common").HttpException | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombre: string;
        precio: number;
        ingredientes: string[];
        tamano: string;
        categoriaId: string;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: ({
            categoria: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                disponible: boolean;
                nombreCategoria: string;
                descripcion: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            disponible: boolean;
            nombre: string;
            precio: number;
            ingredientes: string[];
            tamano: string;
            categoriaId: string;
        })[];
        meta: {
            total: number;
            pagina: number;
            totalPaginas: number;
        };
    }>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombre: string;
        precio: number;
        ingredientes: string[];
        tamano: string;
        categoriaId: string;
    }>;
    update(id: string, updateMenuDto: UpdateMenuDto): Promise<import("@nestjs/common").HttpException | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombre: string;
        precio: number;
        ingredientes: string[];
        tamano: string;
        categoriaId: string;
    }>;
    remove(id: string): Promise<import("@nestjs/common").HttpException | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombre: string;
        precio: number;
        ingredientes: string[];
        tamano: string;
        categoriaId: string;
    }>;
}
