"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsReportModule = void 0;
const common_1 = require("@nestjs/common");
const tickets_report_service_1 = require("./tickets-report.service");
const tickets_report_controller_1 = require("./tickets-report.controller");
const common_2 = require("../../common");
const printer_module_1 = require("../printer/printer.module");
const tickets_module_1 = require("../tickets/tickets.module");
let TicketsReportModule = class TicketsReportModule {
};
exports.TicketsReportModule = TicketsReportModule;
exports.TicketsReportModule = TicketsReportModule = __decorate([
    (0, common_1.Module)({
        controllers: [tickets_report_controller_1.TicketsReportController],
        providers: [tickets_report_service_1.TicketsReportService, common_2.PrismaExceptionHandlerService],
        imports: [printer_module_1.PrinterModule, tickets_module_1.TicketsModule],
    })
], TicketsReportModule);
//# sourceMappingURL=tickets-report.module.js.map