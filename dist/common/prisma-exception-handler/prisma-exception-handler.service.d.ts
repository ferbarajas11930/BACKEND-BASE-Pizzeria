import { HttpException } from '@nestjs/common';
export declare class PrismaExceptionHandlerService {
    handleDBException(error: any): HttpException;
}
