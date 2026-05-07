import { HttpStatus } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';
export declare class PedidosService {
    private readonly prisma;
    private readonly prismaExceptionHandler;
    constructor(prisma: PrismaService, prismaExceptionHandler: PrismaExceptionHandlerService);
    create(createPedidoDto: CreatePedidoDto): Promise<import("@nestjs/common").HttpException | ({
        cliente: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            disponible: boolean;
            nombre: string;
            telefono: string;
            email: string;
            direccion: string;
            cumpleanos: Date | null;
            referencias: string | null;
        };
        sucursal: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            disponible: boolean;
            nombre: string;
            telefono: string;
            direccion: string;
            responsable: string;
            municipio: string;
            estado: string;
            cp: string;
            horario: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        estado: import("@prisma/client").$Enums.EstadoPedido;
        fechaHora: Date;
        numeroPedido: number;
        numeroMesa: number | null;
        clienteId: string;
        sucursalId: string;
        tipoEntrega: import("@prisma/client").$Enums.TipoEntrega;
    })>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: ({
            cliente: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                disponible: boolean;
                nombre: string;
                telefono: string;
                email: string;
                direccion: string;
                cumpleanos: Date | null;
                referencias: string | null;
            };
            sucursal: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                disponible: boolean;
                nombre: string;
                telefono: string;
                direccion: string;
                responsable: string;
                municipio: string;
                estado: string;
                cp: string;
                horario: string;
            };
            detalles: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                pedidoId: string;
                menuId: string;
                cantidad: number;
                extras: string[];
                termino: string;
                precioUnitario: number;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            disponible: boolean;
            estado: import("@prisma/client").$Enums.EstadoPedido;
            fechaHora: Date;
            numeroPedido: number;
            numeroMesa: number | null;
            clienteId: string;
            sucursalId: string;
            tipoEntrega: import("@prisma/client").$Enums.TipoEntrega;
        })[];
        meta: {
            total: number;
            pagina: number;
            registros: number;
            totalPaginas: number;
        };
    }>;
    findOne(id: string): Promise<{
        cliente: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            disponible: boolean;
            nombre: string;
            telefono: string;
            email: string;
            direccion: string;
            cumpleanos: Date | null;
            referencias: string | null;
        };
        sucursal: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            disponible: boolean;
            nombre: string;
            telefono: string;
            direccion: string;
            responsable: string;
            municipio: string;
            estado: string;
            cp: string;
            horario: string;
        };
        detalles: ({
            menu: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                disponible: boolean;
                nombre: string;
                precio: number;
                ingredientes: string[];
                tamano: string;
                categoriaId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            pedidoId: string;
            menuId: string;
            cantidad: number;
            extras: string[];
            termino: string;
            precioUnitario: number;
        })[];
        ticket: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            pedidoId: string;
            descuento: number;
            tarifaEnvio: number;
            numeroTicket: number;
            fechaHora: Date;
            subtotal: number;
            iva: number;
            total: number;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        estado: import("@prisma/client").$Enums.EstadoPedido;
        fechaHora: Date;
        numeroPedido: number;
        numeroMesa: number | null;
        clienteId: string;
        sucursalId: string;
        tipoEntrega: import("@prisma/client").$Enums.TipoEntrega;
    }>;
    update(id: string, updatePedidoDto: UpdatePedidoDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        estado: import("@prisma/client").$Enums.EstadoPedido;
        fechaHora: Date;
        numeroPedido: number;
        numeroMesa: number | null;
        clienteId: string;
        sucursalId: string;
        tipoEntrega: import("@prisma/client").$Enums.TipoEntrega;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        estado: import("@prisma/client").$Enums.EstadoPedido;
        fechaHora: Date;
        numeroPedido: number;
        numeroMesa: number | null;
        clienteId: string;
        sucursalId: string;
        tipoEntrega: import("@prisma/client").$Enums.TipoEntrega;
    } | {
        statusCode: HttpStatus;
        message: string;
    }>;
}
