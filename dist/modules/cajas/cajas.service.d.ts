import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';
export declare class CajasService {
    private readonly prisma;
    private readonly prismaExceptionHandler;
    constructor(prisma: PrismaService, prismaExceptionHandler: PrismaExceptionHandlerService);
    create(createCajaDto: CreateCajaDto): Promise<import("@nestjs/common").HttpException | ({
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ticketId: string;
        formaPago: import("@prisma/client").$Enums.FormaPago;
        referenciaPago: string | null;
        numeroCaja: number;
        fechaPago: Date;
    })>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: ({
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
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            ticketId: string;
            formaPago: import("@prisma/client").$Enums.FormaPago;
            referenciaPago: string | null;
            numeroCaja: number;
            fechaPago: Date;
        })[];
        meta: {
            total: number;
            pagina: number;
            registros: number;
            totalPaginas: number;
        };
    }>;
    findOne(id: string): Promise<{
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ticketId: string;
        formaPago: import("@prisma/client").$Enums.FormaPago;
        referenciaPago: string | null;
        numeroCaja: number;
        fechaPago: Date;
    }>;
    update(id: string, updateCajaDto: UpdateCajaDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ticketId: string;
        formaPago: import("@prisma/client").$Enums.FormaPago;
        referenciaPago: string | null;
        numeroCaja: number;
        fechaPago: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ticketId: string;
        formaPago: import("@prisma/client").$Enums.FormaPago;
        referenciaPago: string | null;
        numeroCaja: number;
        fechaPago: Date;
    }>;
}
