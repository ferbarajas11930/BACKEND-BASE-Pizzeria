import { DetallePedidoService } from './detalle-pedido.service';
import { CreateDetallePedidoDto } from './dto/create-detalle-pedido.dto';
import { UpdateDetallePedidoDto } from './dto/update-detalle-pedido.dto';
import { PaginationDto } from 'src/common';
export declare class DetallePedidoController {
    private readonly detallePedidoService;
    constructor(detallePedidoService: DetallePedidoService);
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
            fechaHora: Date;
            numeroPedido: number;
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
                fechaHora: Date;
                numeroPedido: number;
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
            fechaHora: Date;
            numeroPedido: number;
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
