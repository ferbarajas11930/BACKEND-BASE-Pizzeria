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
exports.DetallePedidoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const common_2 = require("../../common");
let DetallePedidoService = class DetallePedidoService {
    constructor(prisma, prismaExceptionHandler) {
        this.prisma = prisma;
        this.prismaExceptionHandler = prismaExceptionHandler;
    }
    async create(createDetallePedidoDto) {
        try {
            return await this.prisma.detallePedido.create({
                data: createDetallePedidoDto,
                include: { menu: true, pedido: true },
            });
        }
        catch (error) {
            return this.prismaExceptionHandler.handleDBException(error);
        }
    }
    async findAll(paginationDto) {
        const total = await this.prisma.detallePedido.count();
        const paginaActual = paginationDto.page || 1;
        const porPagina = paginationDto.limit || 10;
        return {
            data: await this.prisma.detallePedido.findMany({
                skip: (paginaActual - 1) * porPagina,
                take: porPagina,
                include: { menu: true, pedido: true },
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
        const detalle = await this.prisma.detallePedido.findUnique({
            where: { id },
            include: { menu: true, pedido: true },
        });
        if (!detalle) {
            throw {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: `Detalle de pedido con el id ${id} no fue encontrado`,
            };
        }
        return detalle;
    }
    async update(id, updateDetallePedidoDto) {
        try {
            return await this.prisma.detallePedido.update({
                where: { id },
                data: updateDetallePedidoDto,
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
            return await this.prisma.detallePedido.delete({ where: { id } });
        }
        catch (error) {
            this.prismaExceptionHandler.handleDBException(error);
            throw error;
        }
    }
};
exports.DetallePedidoService = DetallePedidoService;
exports.DetallePedidoService = DetallePedidoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        common_2.PrismaExceptionHandlerService])
], DetallePedidoService);
//# sourceMappingURL=detalle-pedido.service.js.map