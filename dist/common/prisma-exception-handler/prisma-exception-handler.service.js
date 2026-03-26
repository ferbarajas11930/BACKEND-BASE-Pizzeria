"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaExceptionHandlerService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let PrismaExceptionHandlerService = class PrismaExceptionHandlerService {
    handleDBException(error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            switch (error.code) {
                case 'P2002':
                    return new common_1.HttpException({
                        statusCode: common_1.HttpStatus.BAD_REQUEST,
                        message: `El valor de '${error.meta?.target}' ya está en uso.`,
                        error: 'Bad Request',
                    }, common_1.HttpStatus.BAD_REQUEST);
                case 'P2003':
                    return new common_1.HttpException({
                        statusCode: common_1.HttpStatus.BAD_REQUEST,
                        message: `Violación de clave foránea en '${error.meta?.field_name}'.`,
                        error: 'Bad Request',
                    }, common_1.HttpStatus.BAD_REQUEST);
                case 'P2025':
                    return new common_1.HttpException({
                        statusCode: common_1.HttpStatus.NOT_FOUND,
                        message: 'El recurso solicitado no fue encontrado.',
                        error: 'Not Found',
                    }, common_1.HttpStatus.NOT_FOUND);
                default:
                    return new common_1.HttpException({
                        statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                        message: 'Ocurrió un error inesperado con la base de datos.',
                        error: 'Internal Server Error',
                    }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new common_1.HttpException({
            statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Error interno del servidor.',
            error: 'Internal Server Error',
        }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
};
exports.PrismaExceptionHandlerService = PrismaExceptionHandlerService;
exports.PrismaExceptionHandlerService = PrismaExceptionHandlerService = __decorate([
    (0, common_1.Injectable)()
], PrismaExceptionHandlerService);
//# sourceMappingURL=prisma-exception-handler.service.js.map