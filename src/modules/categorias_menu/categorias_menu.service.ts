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

  async findAll() {
    const totalPaginas = await this.prisma.categoriaMenu.count({})
    const paginaActual =  1;
    const porPagina = 10;
    return {
        data: await this.prisma.categoriaMenu.findMany({
            skip: (paginaActual - 1) * porPagina,
            take: porPagina,
            orderBy: {
                nombreCategoria: 'asc'
            }
        }),
        meta: {
            totalPaginas,
            paginaActual,
            porPagina
        }
    };

  }
 // sofdelete en categoria menu

  async findOne(id: string) {
    const categoriaMenu = await this.prisma.categoriaMenu.findUnique({ where: { id } })
    if (!categoriaMenu) {
        throw {
            statusCode: HttpStatus.NOT_FOUND,
            message: `Categoria Menu con el ID ${id} no encontrado`
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

  remove(id: string) {
    try {
        return this.prisma.categoriaMenu.delete({ where: { id } })
    } catch (error) {
        return this.prismaExceptionHandlerService.handleDBException(error);
    }
  }
}