import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PaginationDto } from 'src/common';
export declare class TicketsController {
    private readonly ticketsService;
    constructor(ticketsService: TicketsService);
    create(createTicketDto: CreateTicketDto): Promise<import("@nestjs/common").HttpException | ({
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
        descuento: number;
        tarifaEnvio: number;
        numeroTicket: number;
        fechaHora: Date;
        subtotal: number;
        iva: number;
        total: number;
    })>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: ({
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
            caja: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                ticketId: string;
                formaPago: import("@prisma/client").$Enums.FormaPago;
                referenciaPago: string | null;
                numeroCaja: number;
                fechaPago: Date;
            } | null;
        } & {
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
        })[];
        meta: {
            total: number;
            pagina: number;
            registros: number;
            totalPaginas: number;
        };
    }>;
    findOne(id: string): Promise<{
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
        caja: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            ticketId: string;
            formaPago: import("@prisma/client").$Enums.FormaPago;
            referenciaPago: string | null;
            numeroCaja: number;
            fechaPago: Date;
        } | null;
    } & {
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
    }>;
    update(id: string, updateTicketDto: UpdateTicketDto): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
}
