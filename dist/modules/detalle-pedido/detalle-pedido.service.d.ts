import { CreateDetallePedidoDto } from './dto/create-detalle-pedido.dto';
import { UpdateDetallePedidoDto } from './dto/update-detalle-pedido.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';
export declare class DetallePedidoService {
    private readonly prisma;
    private readonly prismaExceptionHandler;
    constructor(prisma: PrismaService, prismaExceptionHandler: PrismaExceptionHandlerService);
    create(createDetallePedidoDto: CreateDetallePedidoDto): Promise<import("@nestjs/common").HttpException | ({
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
        pedido: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            disponible: boolean;
            estado: import("@prisma/client").$Enums.EstadoPedido;
            numeroPedido: number;
            fechaHora: Date;
            numeroMesa: number | null;
            clienteId: string;
            sucursalId: string;
            tipoEntrega: import("@prisma/client").$Enums.TipoEntrega;
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
    })>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: ({
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
            pedido: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                disponible: boolean;
                estado: import("@prisma/client").$Enums.EstadoPedido;
                numeroPedido: number;
                fechaHora: Date;
                numeroMesa: number | null;
                clienteId: string;
                sucursalId: string;
                tipoEntrega: import("@prisma/client").$Enums.TipoEntrega;
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
        meta: {
            total: number;
            pagina: number;
            registros: number;
            totalPaginas: number;
        };
    }>;
    findOne(id: string): Promise<{
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
        pedido: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            disponible: boolean;
            estado: import("@prisma/client").$Enums.EstadoPedido;
            numeroPedido: number;
            fechaHora: Date;
            numeroMesa: number | null;
            clienteId: string;
            sucursalId: string;
            tipoEntrega: import("@prisma/client").$Enums.TipoEntrega;
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
    }>;
    update(id: string, updateDetallePedidoDto: UpdateDetallePedidoDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        pedidoId: string;
        menuId: string;
        cantidad: number;
        extras: string[];
        termino: string;
        precioUnitario: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        pedidoId: string;
        menuId: string;
        cantidad: number;
        extras: string[];
        termino: string;
        precioUnitario: number;
    }>;
}
