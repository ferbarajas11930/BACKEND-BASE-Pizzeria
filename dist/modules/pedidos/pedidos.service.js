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
exports.PedidosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const common_2 = require("../../common");
let PedidosService = class PedidosService {
    constructor(prisma, prismaExceptionHandler) {
        this.prisma = prisma;
        this.prismaExceptionHandler = prismaExceptionHandler;
    }
    async create(createPedidoDto) {
        try {
            return await this.prisma.pedidos.create({
                data: createPedidoDto,
                include: { cliente: true, sucursal: true },
            });
        }
        catch (error) {
            return this.prismaExceptionHandler.handleDBException(error);
        }
    }
    async findAll(paginationDto) {
        const total = await this.prisma.pedidos.count();
        const paginaActual = paginationDto.page || 1;
        const porPagina = paginationDto.limit || 10;
        return {
            data: await this.prisma.pedidos.findMany({
                skip: (paginaActual - 1) * porPagina,
                take: porPagina,
                orderBy: { fechaHora: 'desc' },
                where: { disponible: true },
                include: { cliente: true, sucursal: true, detalles: true },
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
        const pedido = await this.prisma.pedidos.findUnique({
            where: { id },
            include: {
                cliente: true,
                sucursal: true,
                detalles: { include: { menu: true } },
                ticket: true,
            },
        });
        if (!pedido) {
            throw {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: `Pedido con el id ${id} no fue encontrado`,
            };
        }
        return pedido;
    }
    async update(id, updatePedidoDto) {
        try {
            return await this.prisma.pedidos.update({
                where: { id },
                data: updatePedidoDto,
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
            const pedido = await this.prisma.pedidos.update({
                where: { id },
                data: { disponible: false },
            });
            if (pedido.disponible === false) {
                return {
                    statusCode: common_1.HttpStatus.OK,
                    message: `El pedido #${pedido.numeroPedido} se ha cancelado correctamente`,
                };
            }
            return pedido;
        }
        catch (error) {
            this.prismaExceptionHandler.handleDBException(error);
            throw error;
        }
    }
};
exports.PedidosService = PedidosService;
exports.PedidosService = PedidosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        common_2.PrismaExceptionHandlerService])
], PedidosService);
//# sourceMappingURL=pedidos.service.js.map