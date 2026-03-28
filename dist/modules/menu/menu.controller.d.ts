import { MenuService } from './menu.service';
import { CreateMenuDto } from './Dto/create-menu.dto';
import { UpdateMenuDto } from './Dto/update-menu.dto';
import { PaginationDto } from 'src/common';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
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
