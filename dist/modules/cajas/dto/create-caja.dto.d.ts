import { FormaPago } from '@prisma/client';
export declare class CreateCajaDto {
    ticketId: string;
    formaPago: FormaPago;
    referenciaPago?: string;
}
