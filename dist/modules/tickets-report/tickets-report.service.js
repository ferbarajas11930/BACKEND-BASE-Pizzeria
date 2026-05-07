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
exports.TicketsReportService = void 0;
const common_1 = require("@nestjs/common");
const printer_service_1 = require("../printer/printer.service");
const prisma_service_1 = require("../../database/prisma.service");
const common_2 = require("../../common");
const ticket_report_1 = require("../reports/ticket.report");
const hellow_world_report_1 = require("../reports/hellow-world.report");
let TicketsReportService = class TicketsReportService {
    constructor(printerService, prisma, prismaExceptionHandler) {
        this.printerService = printerService;
        this.prisma = prisma;
        this.prismaExceptionHandler = prismaExceptionHandler;
    }
    async helloweorld() {
        try {
            const docDefinition = (0, hellow_world_report_1.getHelloWorldReport)({ name: 'Jacob' });
            const doc = this.printerService.creatPdf(docDefinition);
            return doc;
        }
        catch (error) {
            this.prismaExceptionHandler.handleDBException(error);
            throw error;
        }
    }
    async ticketReport(ticketID) {
        try {
            const ticket = await this.prisma.tickets.findUnique({
                where: { id: ticketID },
                include: {
                    pedido: {
                        include: {
                            cliente: true,
                            detalles: {
                                include: { menu: true }
                            }
                        }
                    }
                }
            });
            if (!ticket)
                throw new Error(`Ticket ${ticketID} no encontrado`);
            const infoPizzeria = await this.prisma.infoPizzeria.findFirst();
            const docDefinition = (0, ticket_report_1.getTicketReport)({ ticket, infoPizzeria });
            const doc = this.printerService.creatPdf(docDefinition);
            return doc;
        }
        catch (error) {
            this.prismaExceptionHandler.handleDBException(error);
            throw error;
        }
    }
};
exports.TicketsReportService = TicketsReportService;
exports.TicketsReportService = TicketsReportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [printer_service_1.PrinterService,
        prisma_service_1.PrismaService,
        common_2.PrismaExceptionHandlerService])
], TicketsReportService);
//# sourceMappingURL=tickets-report.service.js.map