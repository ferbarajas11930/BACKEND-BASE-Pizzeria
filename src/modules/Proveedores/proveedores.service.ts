import { HttpStatus, Injectable } from "@nestjs/common";
import { CreateProveedoresDto } from "./Dto/create-proveedores.dto";
import { UpdateProveedoresDto } from "./Dto/update-proveedores.dto";
import { PrismaService } from "src/database/prisma.service";
import { PaginationDto, PrismaExceptionHandlerService } from "src/common";
@Injectable()

export class ProveedoresService {

    constructor(
        private readonly prisma: PrismaService,
        private readonly prismaExceptionHandlerService: PrismaExceptionHandlerService
    ) { }

    async create(createProvedorDto: CreateProveedoresDto) {
        try {
            const proveedor = await this.prisma.proovedores.create({
                data: createProvedorDto
            })
            return proveedor;
        } catch (error) {
            return this.prismaExceptionHandlerService.handleDBException(error);
        }
    }

    async findAll(paginationDto: PaginationDto) {
        const totalPaginas = await this.prisma.proovedores.count({})
        const paginaActual = paginationDto.page || 1;
        const porPagina = paginationDto.limit || 10;
        return {
            data: await this.prisma.proovedores.findMany({
                skip: (paginaActual - 1) * porPagina,
                take: porPagina,
                orderBy: {
                    nombreProveedor: 'asc'
                }
            }),
            meta: {
                total: totalPaginas,
                pagina: paginaActual,
                registro: porPagina,
                totalPaginas: Math.ceil(totalPaginas / porPagina)
            }

        }
    }

    async findOne(id: string) {
        const proveedor = await this.prisma.proovedores.findUnique({ where: { id } })
        if (!proveedor) {
            throw {
                statusCode: HttpStatus.NOT_FOUND,
                message: ` Proveedor con el ID ${id} no encontrado`
            }
        }
        return proveedor;
    }

    async update(id: string, updateProveedorDto: UpdateProveedoresDto) {
        try {
            return await this.prisma.proovedores.update({
                where: { id },
                data: updateProveedorDto,

            })
        } catch (error) {
            this.prismaExceptionHandlerService.handleDBException(error);
        }
    }

    async remove(id: string) {
        try {
            return await this.prisma.proovedores.delete({ where: { id } })
        } catch (error) {
            this.prismaExceptionHandlerService.handleDBException(error);
            throw error
        }
    }
}