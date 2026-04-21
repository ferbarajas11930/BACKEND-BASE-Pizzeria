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
exports.EmpleadosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const common_2 = require("../../common");
let EmpleadosService = class EmpleadosService {
    constructor(prisma, prismaExceptionHandler) {
        this.prisma = prisma;
        this.prismaExceptionHandler = prismaExceptionHandler;
    }
    async create(createEmpleadoDto) {
        try {
            return await this.prisma.empleados.create({
                data: {
                    ...createEmpleadoDto,
                    fechaNacimiento: new Date(createEmpleadoDto.fechaNacimiento),
                },
            });
        }
        catch (error) {
            return this.prismaExceptionHandler.handleDBException(error);
        }
    }
    async findAll(paginationDto) {
        const total = await this.prisma.empleados.count();
        const paginaActual = paginationDto.page || 1;
        const porPagina = paginationDto.limit || 10;
        return {
            data: await this.prisma.empleados.findMany({
                skip: (paginaActual - 1) * porPagina,
                take: porPagina,
                orderBy: { apellido: 'asc' },
                where: { disponible: true },
                include: { sucursal: true },
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
        const empleado = await this.prisma.empleados.findUnique({
            where: { id },
            include: { sucursal: true },
        });
        if (!empleado) {
            throw {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: `Empleado con el id ${id} no fue encontrado`,
            };
        }
        return empleado;
    }
    async update(id, updateEmpleadoDto) {
        try {
            const data = { ...updateEmpleadoDto };
            if (updateEmpleadoDto.fechaNacimiento) {
                data.fechaNacimiento = new Date(updateEmpleadoDto.fechaNacimiento);
            }
            return await this.prisma.empleados.update({
                where: { id },
                data,
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
            const empleado = await this.prisma.empleados.update({
                where: { id },
                data: { disponible: false },
            });
            if (empleado.disponible === false) {
                return {
                    statusCode: common_1.HttpStatus.OK,
                    message: `El empleado ${empleado.nombre} ${empleado.apellido} se ha eliminado correctamente`,
                };
            }
            return empleado;
        }
        catch (error) {
            this.prismaExceptionHandler.handleDBException(error);
            throw error;
        }
    }
};
exports.EmpleadosService = EmpleadosService;
exports.EmpleadosService = EmpleadosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        common_2.PrismaExceptionHandlerService])
], EmpleadosService);
//# sourceMappingURL=empleados.service.js.map