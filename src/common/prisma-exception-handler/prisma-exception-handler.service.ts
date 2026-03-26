import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrismaExceptionHandlerService {
  handleDBException(error: any): HttpException {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002': // Unique constraint failed
          return new HttpException(
            {
              statusCode: HttpStatus.BAD_REQUEST,
              message: `El valor de '${error.meta?.target}' ya está en uso.`,
              error: 'Bad Request',
            },
            HttpStatus.BAD_REQUEST,
          );
        case 'P2003': // Foreign key constraint failed
          return new HttpException(
            {
              statusCode: HttpStatus.BAD_REQUEST,
              message: `Violación de clave foránea en '${error.meta?.field_name}'.`,
              error: 'Bad Request',
            },
            HttpStatus.BAD_REQUEST,
          );
        case 'P2025': // Record not found
          return new HttpException(
            {
              statusCode: HttpStatus.NOT_FOUND,
              message: 'El recurso solicitado no fue encontrado.',
              error: 'Not Found',
            },
            HttpStatus.NOT_FOUND,
          );
        default:
          return new HttpException(
            {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: 'Ocurrió un error inesperado con la base de datos.',
              error: 'Internal Server Error',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
      }
    }

    return new HttpException(
      {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error interno del servidor.',
        error: 'Internal Server Error',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
