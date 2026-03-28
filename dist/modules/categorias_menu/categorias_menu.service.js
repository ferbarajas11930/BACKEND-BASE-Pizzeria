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
exports.CategoriasMenuService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const common_2 = require("../../common");
let CategoriasMenuService = class CategoriasMenuService {
    constructor(prisma, prismaExceptionHandlerService) {
        this.prisma = prisma;
        this.prismaExceptionHandlerService = prismaExceptionHandlerService;
    }
    async create(createCategoriasMenuDto) {
        try {
            const categoriaMenu = await this.prisma.categoriaMenu.create({
                data: createCategoriasMenuDto
            });
            return categoriaMenu;
        }
        catch (error) {
            return this.prismaExceptionHandlerService.handleDBException(error);
        }
    }
    async findAll() {
        const totalPaginas = await this.prisma.categoriaMenu.count({
            where: { disponible: true }
        });
        const paginaActual = 1;
        const porPagina = 10;
        return {
            data: await this.prisma.categoriaMenu.findMany({
                skip: (paginaActual - 1) * porPagina,
                take: porPagina,
                where: { disponible: true },
                orderBy: { nombreCategoria: 'asc' }
            }),
            meta: { totalPaginas, paginaActual, porPagina }
        };
    }
    async findOne(id) {
        const categoriaMenu = await this.prisma.categoriaMenu.findFirst({
            where: { id, disponible: true }
        });
        if (!categoriaMenu) {
            throw {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: `Categoria Menu con el ID ${id} no encontrada o no disponible`
            };
        }
        return categoriaMenu;
    }
    async update(id, updateCategoriasMenuDto) {
        try {
            return await this.prisma.categoriaMenu.update({
                where: { id },
                data: updateCategoriasMenuDto,
            });
        }
        catch (error) {
            return this.prismaExceptionHandlerService.handleDBException(error);
        }
    }
    async remove(id) {
        try {
            await this.findOne(id);
            return await this.prisma.categoriaMenu.update({
                where: { id },
                data: { disponible: false }
            });
        }
        catch (error) {
            return this.prismaExceptionHandlerService.handleDBException(error);
        }
    }
};
exports.CategoriasMenuService = CategoriasMenuService;
exports.CategoriasMenuService = CategoriasMenuService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        common_2.PrismaExceptionHandlerService])
], CategoriasMenuService);
//# sourceMappingURL=categorias_menu.service.js.map