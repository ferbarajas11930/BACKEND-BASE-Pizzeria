"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const common_2 = require("../../common");
let TicketsService = class TicketsService {
    constructor(prisma, prismaExceptionHandler) {
        this.prisma = prisma;
        this.prismaExceptionHandler = prismaExceptionHandler;
    }
    async create(createTicketDto) {
        try {
            const ticketExistente = await this.prisma.tickets.findUnique({
                where: { pedidoId: createTicketDto.pedidoId }
            });
            if (ticketExistente) {
                throw new common_1.BadRequestException(`El pedido con ID ${createTicketDto.pedidoId} ya tiene un ticket generado.`);
            }
            const pedido = await this.prisma.pedidos.findUnique({
                where: { id: createTicketDto.pedidoId },
                include: { detalles: true }
            });
            if (!pedido) {
                throw new common_1.NotFoundException(`Pedido con id ${createTicketDto.pedidoId} no encontrado`);
            }
            const subtotal = pedido.detalles.reduce((acc, item) => {
                return acc + (item.cantidad * item.precioUnitario);
            }, 0);
            const iva = subtotal * 0.16;
            const descuento = createTicketDto.descuento || 0;
            const envio = createTicketDto.tarifaEnvio || 0;
            const total = (subtotal + iva + envio) - descuento;
            return await this.prisma.tickets.create({
                data: {
                    pedidoId: createTicketDto.pedidoId,
                    subtotal,
                    iva,
                    total,
                    descuento,
                    tarifaEnvio: envio
                },
                include: { pedido: true },
            });
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException || error instanceof common_1.NotFoundException) {
                throw error;
            }
            return this.prismaExceptionHandler.handleDBException(error);
        }
    }
    async findAll(paginationDto) {
        const total = await this.prisma.tickets.count();
        const paginaActual = paginationDto.page || 1;
        const porPagina = paginationDto.limit || 10;
        return {
            data: await this.prisma.tickets.findMany({
                skip: (paginaActual - 1) * porPagina,
                take: porPagina,
                orderBy: { fechaHora: 'desc' },
                include: { pedido: true, caja: true },
            }),
            meta: {
                total,
                pagina: paginaActual,
                registros: porPagina,
                totalPaginas: Math.ceil(total / porPagina),
            },
        };
    }
    async findOne(id) {
        const ticket = await this.prisma.tickets.findUnique({
            where: { id },
            include: { pedido: true, caja: true },
        });
        if (!ticket) {
            throw {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: `Ticket con el id ${id} no fue encontrado`,
            };
        }
        return ticket;
    }
    async update(id, updateTicketDto) {
        try {
            return await this.prisma.tickets.update({
                where: { id },
                data: updateTicketDto,
            });
        }
        catch (error) {
            this.prismaExceptionHandler.handleDBException(error);
            throw error;
        }
    }
    async remove(id) {
        try {
            await this.findOne(id);
            return await this.prisma.tickets.delete({ where: { id } });
        }
        catch (error) {
            this.prismaExceptionHandler.handleDBException(error);
            throw error;
        }
    }
};
exports.TicketsService = TicketsService;
exports.TicketsService = TicketsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        common_2.PrismaExceptionHandlerService])
], TicketsService);
//# sourceMappingURL=tickets.service.js.map