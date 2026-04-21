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
exports.SucursalesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const common_2 = require("../../common");
let SucursalesService = class SucursalesService {
    constructor(prisma, prismaExceptionHandler) {
        this.prisma = prisma;
        this.prismaExceptionHandler = prismaExceptionHandler;
    }
    async create(createSucursalDto) {
        try {
            return await this.prisma.sucursales.create({
                data: createSucursalDto,
            });
        }
        catch (error) {
            return this.prismaExceptionHandler.handleDBException(error);
        }
    }
    async findAll(paginationDto) {
        const total = await this.prisma.sucursales.count();
        const paginaActual = paginationDto.page || 1;
        const porPagina = paginationDto.limit || 10;
        return {
            data: await this.prisma.sucursales.findMany({
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
        const sucursal = await this.prisma.sucursales.findUnique({
            where: { id },
        });
        if (!sucursal) {
            throw {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: `Sucursal con el id ${id} no fue encontrada`,
            };
        }
        return sucursal;
    }
    async update(id, updateSucursalDto) {
        try {
            return await this.prisma.sucursales.update({
                where: { id },
                data: updateSucursalDto,
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
            const sucursal = await this.prisma.sucursales.update({
                where: { id },
                data: { disponible: false },
            });
            if (sucursal.disponible === false) {
                return {
                    statusCode: common_1.HttpStatus.OK,
                    message: `La sucursal ${sucursal.nombre} se ha eliminado correctamente`,
                };
            }
            return sucursal;
        }
        catch (error) {
            this.prismaExceptionHandler.handleDBException(error);
            throw error;
        }
    }
};
exports.SucursalesService = SucursalesService;
exports.SucursalesService = SucursalesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        common_2.PrismaExceptionHandlerService])
], SucursalesService);
//# sourceMappingURL=sucursales.service.js.map