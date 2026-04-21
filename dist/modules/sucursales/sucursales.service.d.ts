import { HttpStatus } from '@nestjs/common';
import { CreateSucursalDto } from './dto/create-sucursal.dto';
import { UpdateSucursalDto } from './dto/update-sucursal.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';
export declare class SucursalesService {
    private readonly prisma;
    private readonly prismaExceptionHandler;
    constructor(prisma: PrismaService, prismaExceptionHandler: PrismaExceptionHandlerService);
    create(createSucursalDto: CreateSucursalDto): Promise<import("@nestjs/common").HttpException | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombre: string;
        telefono: string;
        direccion: string;
        responsable: string;
        municipio: string;
        estado: string;
        cp: string;
        horario: string;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            disponible: boolean;
            nombre: string;
            telefono: string;
            direccion: string;
            responsable: string;
            municipio: string;
            estado: string;
            cp: string;
            horario: string;
        }[];
        meta: {
            total: number;
            pagina: number;
            registros: number;
            totalPaginas: number;
        };
    }>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombre: string;
        telefono: string;
        direccion: string;
        responsable: string;
        municipio: string;
        estado: string;
        cp: string;
        horario: string;
    }>;
    update(id: string, updateSucursalDto: UpdateSucursalDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombre: string;
        telefono: string;
        direccion: string;
        responsable: string;
        municipio: string;
        estado: string;
        cp: string;
        horario: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombre: string;
        telefono: string;
        direccion: string;
        responsable: string;
        municipio: string;
        estado: string;
        cp: string;
        horario: string;
    } | {
        statusCode: HttpStatus;
        message: string;
    }>;
}
