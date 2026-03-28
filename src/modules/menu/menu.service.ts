import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './Dto/create-menu.dto';
import { UpdateMenuDto } from './Dto/update-menu.dto';
import { PrismaService } from "src/database/prisma.service";
import { PaginationDto, PrismaExceptionHandlerService } from "src/common";

@Injectable()
export class MenuService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaExceptionHandler: PrismaExceptionHandlerService
  ) {}

  async create(createMenuDto: CreateMenuDto) {
    try {
      return await this.prisma.menu.create({
        data: createMenuDto
      });
    } catch (error) {
      return this.prismaExceptionHandler.handleDBException(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const totalRegistros = await this.prisma.menu.count({
      where: { disponible: true }
    });
    
    const paginaActual = paginationDto.page || 1;
    const porPagina = paginationDto.limit || 10;

    return {
      data: await this.prisma.menu.findMany({
        skip: (paginaActual - 1) * porPagina,
        take: porPagina,
        where: { disponible: true },
        include: { categoria: true }, // Opcional: incluye info de la categoría
        orderBy: { nombre: 'asc' }
      }),
      meta: {
        total: totalRegistros,
        pagina: paginaActual,
        totalPaginas: Math.ceil(totalRegistros / porPagina)
      }
    };
  }

  async findOne(id: string) {
    const menu = await this.prisma.menu.findFirst({
      where: { id, disponible: true }
    });

    if (!menu) {
      throw {
        statusCode: HttpStatus.NOT_FOUND,
        message: `Platillo con el ID ${id} no encontrado o no está disponible`
      };
    }
    return menu;
  }

  async update(id: string, updateMenuDto: UpdateMenuDto) {
    try {
      await this.findOne(id); // Verifica si existe y está activo
      return await this.prisma.menu.update({
        where: { id },
        data: updateMenuDto
      });
    } catch (error) {
      return this.prismaExceptionHandler.handleDBException(error);
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id); // Verifica si existe
      return await this.prisma.menu.update({
        where: { id },
        data: { disponible: false } // Soft Delete igual que en Proveedores
      });
    } catch (error) {
      return this.prismaExceptionHandler.handleDBException(error);
    }
  }
}
