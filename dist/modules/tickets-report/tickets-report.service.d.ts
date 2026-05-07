import { PrinterService } from '../printer/printer.service';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaExceptionHandlerService } from 'src/common';
export declare class TicketsReportService {
    private readonly printerService;
    private readonly prisma;
    private readonly prismaExceptionHandler;
    constructor(printerService: PrinterService, prisma: PrismaService, prismaExceptionHandler: PrismaExceptionHandlerService);
    helloweorld(): Promise<PDFKit.PDFDocument>;
    ticketReport(ticketID: string): Promise<PDFKit.PDFDocument>;
}
