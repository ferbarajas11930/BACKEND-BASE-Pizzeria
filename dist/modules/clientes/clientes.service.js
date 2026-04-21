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
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const common_2 = require("../../common");
let ClientesService = class ClientesService {
    constructor(prisma, prismaExceptionHandler) {
        this.prisma = prisma;
        this.prismaExceptionHandler = prismaExceptionHandler;
    }
    async create(createClienteDto) {
        try {
            const cliente = await this.prisma.clientes.create({
                data: createClienteDto,
            });
            return cliente;
        }
        catch (error) {
            return this.prismaExceptionHandler.handleDBException(error);
        }
    }
    async findAll(paginationDto) {
        const total = await this.prisma.clientes.count();
        const paginaActual = paginationDto.page || 1;
        const porPagina = paginationDto.limit || 10;
        return {
            data: await this.prisma.clientes.findMany({
                skip: (paginaActual - 1) * porPagina,
                take: porPagina,
                orderBy: { nombre: 'asc' },
                where: { disponible: true },
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
        const cliente = await this.prisma.clientes.findUnique({
            where: { id },
        });
        if (!cliente) {
            throw {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: `Cliente con el id ${id} no fue encontrado`,
            };
        }
        return cliente;
    }
    async update(id, updateClienteDto) {
        try {
            return await this.prisma.clientes.update({
                where: { id },
                data: updateClienteDto,
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
            const cliente = await this.prisma.clientes.update({
                where: { id },
                data: { disponible: false },
            });
            if (cliente.disponible === false) {
                return {
                    statusCode: common_1.HttpStatus.OK,
                    message: `El cliente ${cliente.nombre} se ha eliminado correctamente`,
                };
            }
            return cliente;
        }
        catch (error) {
            this.prismaExceptionHandler.handleDBException(error);
            throw error;
        }
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        common_2.PrismaExceptionHandlerService])
], ClientesService);
//# sourceMappingURL=clientes.service.js.map