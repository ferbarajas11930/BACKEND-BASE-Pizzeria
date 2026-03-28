import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoriasMenuDto } from './Dto/create-categorias_menu.dto';
import { UpdateCategoriasMenuDto } from './Dto/update-categorias_menu.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';

@Injectable()
export class CategoriasMenuService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly prismaExceptionHandlerService: PrismaExceptionHandlerService
    ) { }

    async create(createCategoriasMenuDto: CreateCategoriasMenuDto) {
        try {
            const categoriaMenu = await this.prisma.categoriaMenu.create({
                data: createCategoriasMenuDto
            })
            return categoriaMenu;
        } catch (error) {
            return this.prismaExceptionHandlerService.handleDBException(error);
        }
    }

    // 1. findAll: Filtrar solo las disponibles
    async findAll() {
        const totalPaginas = await this.prisma.categoriaMenu.count({
            where: { disponible: true } // <-- Filtro Soft Delete
        });

        const paginaActual = 1;
        const porPagina = 10;

        return {
            data: await this.prisma.categoriaMenu.findMany({
                skip: (paginaActual - 1) * porPagina,
                take: porPagina,
                where: { disponible: true }, // <-- Filtro Soft Delete
                orderBy: { nombreCategoria: 'asc' }
            }),
            meta: { totalPaginas, paginaActual, porPagina }
        };
    }

    // 2. findOne: Buscar solo si está disponible
    async findOne(id: string) {
        const categoriaMenu = await this.prisma.categoriaMenu.findFirst({
            where: { id, disponible: true } // <-- Cambio de findUnique a findFirst para filtrar
        });

        if (!categoriaMenu) {
            throw {
                statusCode: HttpStatus.NOT_FOUND,
                message: `Categoria Menu con el ID ${id} no encontrada o no disponible`
            }
        }
        return categoriaMenu;
    }

      async update(id: string, updateCategoriasMenuDto: UpdateCategoriasMenuDto) {
    try {
        return await this.prisma.categoriaMenu.update({
            where: { id },
            data: updateCategoriasMenuDto,
        })
    } catch (error) {
        return this.prismaExceptionHandlerService.handleDBException(error);
    }
  }

    // 3. remove: Cambiar delete por update
    async remove(id: string) {
        try {
            // Verificamos primero si existe y está disponible
            await this.findOne(id);

            return await this.prisma.categoriaMenu.update({
                where: { id },
                data: { disponible: false } // <-- Soft Delete
            });
        } catch (error) {
            return this.prismaExceptionHandlerService.handleDBException(error);
        }
    }
}