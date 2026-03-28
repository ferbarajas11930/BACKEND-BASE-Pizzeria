import { HttpStatus, Injectable } from "@nestjs/common";
import { CreateProveedoresDto } from "./Dto/create-proveedores.dto";
import { UpdateProveedoresDto } from "./Dto/update-proveedores.dto";
import { PrismaService } from "src/database/prisma.service";
import { PaginationDto, PrismaExceptionHandlerService } from "src/common";
@Injectable()

export class ProveedoresService {

    constructor(
        private readonly prisma: PrismaService,
        private readonly prismaExceptionHandler: PrismaExceptionHandlerService
    ) { }

    async create(createProvedorDto: CreateProveedoresDto) {
        try {
            const proveedor = await this.prisma.proovedores.create({
                data: createProvedorDto
            })
            return proveedor;
        } catch (error) {
            return this.prismaExceptionHandler.handleDBException(error);
        }
    }

    async findAll(paginationDto: PaginationDto) {
        // Contar solo los proveedores disponibles
        const totalPaginas = await this.prisma.proovedores.count({
            where: { disponible: true }  // Filtro de Soft Delete
        })
        const paginaActual = paginationDto.page || 1;
        const porPagina = paginationDto.limit || 10;

        return {
            data: await this.prisma.proovedores.findMany({
                skip: (paginaActual - 1) * porPagina,
                take: porPagina,
                where: { disponible: true }, // Filtro de Soft Delete
                orderBy: { nombreProveedor: 'asc' }
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
        // Buscar proveedor que esté disponible
        const proveedor = await this.prisma.proovedores.findFirst({
            where: { id, disponible: true }  // Filtro de Soft Delete
        })

        if (!proveedor) {
            throw {
                statusCode: HttpStatus.NOT_FOUND,
                message: `Proveedor con el ID ${id} no encontrado o no está disponible`
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
            this.prismaExceptionHandler.handleDBException(error);
        }
    }

    async remove(id: string) {
        try {
            // Verificamos primero si existe y está disponible
            await this.findOne(id);

            // Actualizamos el campo disponible a false en lugar de borrar
            return await this.prisma.proovedores.update({
                where: { id },
                data: { disponible: false }  // Filtro de Soft Delete
            });
        } catch (error) {
            this.prismaExceptionHandler.handleDBException(error);
            throw error;
        }
    }
}