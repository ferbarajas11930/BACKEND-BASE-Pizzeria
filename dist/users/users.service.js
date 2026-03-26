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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const common_2 = require("../common");
let UsersService = class UsersService {
    constructor(prisma, prismaExceptionHandler) {
        this.prisma = prisma;
        this.prismaExceptionHandler = prismaExceptionHandler;
    }
    async findAll(paginationDto) {
        const totalPages = await this.prisma.user.count({});
        const currentPage = paginationDto.page || 1;
        const perPage = paginationDto.limit || 10;
        return {
            data: await this.prisma.user.findMany({
                skip: (currentPage - 1) * perPage,
                take: perPage,
                where: {
                    available: true,
                },
            }),
            meta: {
                total: totalPages,
                page: currentPage,
                perPage: perPage,
                totalPages: Math.ceil(totalPages / perPage),
            },
        };
    }
    findOne(id) {
        const user = this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: `User with id ${id} not found`,
            };
        }
        return user;
    }
    async update(id, updateUserDto) {
        try {
            return await this.prisma.user.update({
                where: { id },
                data: updateUserDto,
            });
        }
        catch (error) {
            this.prismaExceptionHandler.handleDBException(error);
            throw error;
        }
    }
    remove(id) {
        try {
            return this.prisma.user.update({
                where: { id },
                data: { available: false },
            });
        }
        catch (error) {
            this.prismaExceptionHandler.handleDBException(error);
            throw error;
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        common_2.PrismaExceptionHandlerService])
], UsersService);
//# sourceMappingURL=users.service.js.map