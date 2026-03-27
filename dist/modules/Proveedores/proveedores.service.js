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
exports.ProveedoresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const common_2 = require("../../common");
let ProveedoresService = class ProveedoresService {
    constructor(prisma, prismaExceptionHandlerService) {
        this.prisma = prisma;
        this.prismaExceptionHandlerService = prismaExceptionHandlerService;
    }
    async create(createProvedorDto) {
        try {
            const proveedor = await this.prisma.proovedores.create({
                data: createProvedorDto
            });
            return proveedor;
        }
        catch (error) {
            return this.prismaExceptionHandlerService.handleDBException(error);
        }
    }
    async findAll(paginationDto) {
        const totalPaginas = await this.prisma.proovedores.count({
            where: { disponible: true }
        });
        const paginaActual = paginationDto.page || 1;
        const porPagina = paginationDto.limit || 10;
        return {
            data: await this.prisma.proovedores.findMany({
                skip: (paginaActual - 1) * porPagina,
                take: porPagina,
                where: { disponible: true },
                orderBy: { nombreProveedor: 'asc' }
            }),
            meta: {
                total: totalPaginas,
                pagina: paginaActual,
                registro: porPagina,
                totalPaginas: Math.ceil(totalPaginas / porPagina)
            }
        };
    }
    async findOne(id) {
        const proveedor = await this.prisma.proovedores.findFirst({
            where: { id, disponible: true }
        });
        if (!proveedor) {
            throw {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: `Proveedor con el ID ${id} no encontrado o no está disponible`
            };
        }
        return proveedor;
    }
    async update(id, updateProveedorDto) {
        try {
            return await this.prisma.proovedores.update({
                where: { id },
                data: updateProveedorDto,
            });
        }
        catch (error) {
            this.prismaExceptionHandlerService.handleDBException(error);
        }
    }
    async remove(id) {
        try {
            await this.findOne(id);
            return await this.prisma.proovedores.update({
                where: { id },
                data: { disponible: false }
            });
        }
        catch (error) {
            this.prismaExceptionHandlerService.handleDBException(error);
            throw error;
        }
    }
};
exports.ProveedoresService = ProveedoresService;
exports.ProveedoresService = ProveedoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        common_2.PrismaExceptionHandlerService])
], ProveedoresService);
//# sourceMappingURL=proveedores.service.js.map