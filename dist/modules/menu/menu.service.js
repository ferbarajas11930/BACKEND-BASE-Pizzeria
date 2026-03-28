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
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const common_2 = require("../../common");
let MenuService = class MenuService {
    constructor(prisma, prismaExceptionHandler) {
        this.prisma = prisma;
        this.prismaExceptionHandler = prismaExceptionHandler;
    }
    async create(createMenuDto) {
        try {
            return await this.prisma.menu.create({
                data: createMenuDto
            });
        }
        catch (error) {
            return this.prismaExceptionHandler.handleDBException(error);
        }
    }
    async findAll(paginationDto) {
        const totalRegistros = await this.prisma.menu.count({
            where: { disponible: true }
        });
        const paginaActual = paginationDto.page || 1;
        const porPagina = paginationDto.limit || 10;
        return {
            data: await this.prisma.menu.findMany({
                skip: (paginaActual - 1) * porPagina,
                take: porPagina,
                where: { disponible: true },
                include: { categoria: true },
                orderBy: { nombre: 'asc' }
            }),
            meta: {
                total: totalRegistros,
                pagina: paginaActual,
                totalPaginas: Math.ceil(totalRegistros / porPagina)
            }
        };
    }
    async findOne(id) {
        const menu = await this.prisma.menu.findFirst({
            where: { id, disponible: true }
        });
        if (!menu) {
            throw {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: `Platillo con el ID ${id} no encontrado o no está disponible`
            };
        }
        return menu;
    }
    async update(id, updateMenuDto) {
        try {
            await this.findOne(id);
            return await this.prisma.menu.update({
                where: { id },
                data: updateMenuDto
            });
        }
        catch (error) {
            return this.prismaExceptionHandler.handleDBException(error);
        }
    }
    async remove(id) {
        try {
            await this.findOne(id);
            return await this.prisma.menu.update({
                where: { id },
                data: { disponible: false }
            });
        }
        catch (error) {
            return this.prismaExceptionHandler.handleDBException(error);
        }
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        common_2.PrismaExceptionHandlerService])
], MenuService);
//# sourceMappingURL=menu.service.js.map