import { Response } from 'express';
import { TicketsReportService } from './tickets-report.service';
export declare class TicketsReportController {
    private readonly ticketsReportService;
    constructor(ticketsReportService: TicketsReportService);
    getHelloWorldReport(response: Response): Promise<void>;
    getTicketReport(response: Response, ticketID: string): Promise<void>;
}
