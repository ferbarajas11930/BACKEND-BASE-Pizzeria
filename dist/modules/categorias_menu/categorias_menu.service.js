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
        const totalPaginas = await this.prisma.categoriaMenu.count({});
        const paginaActual = 1;
        const porPagina = 10;
        return {
            data: await this.prisma.categoriaMenu.findMany({
                skip: (paginaActual - 1) * porPagina,
                take: porPagina,
                orderBy: {
                    nombreCategoria: 'asc'
                }
            }),
            meta: {
                totalPaginas,
                paginaActual,
                porPagina
            }
        };
    }
    async findOne(id) {
        const categoriaMenu = await this.prisma.categoriaMenu.findUnique({ where: { id } });
        if (!categoriaMenu) {
            throw {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: `Categoria Menu con el ID ${id} no encontrado`
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
    remove(id) {
        try {
            return this.prisma.categoriaMenu.delete({ where: { id } });
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