import { HttpStatus } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';
export declare class EmpleadosService {
    private readonly prisma;
    private readonly prismaExceptionHandler;
    constructor(prisma: PrismaService, prismaExceptionHandler: PrismaExceptionHandlerService);
    create(createEmpleadoDto: CreateEmpleadoDto): Promise<import("@nestjs/common").HttpException | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombre: string;
        telefono: string;
        correo: string;
        sucursalId: string;
        apellido: string;
        puesto: string;
        fechaNacimiento: Date;
        domicilio: string;
        numEmergencia: string;
        tipoSangre: string;
        discapacidad: boolean;
        genero: string;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: ({
            sucursal: {
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
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            disponible: boolean;
            nombre: string;
            telefono: string;
            correo: string;
            sucursalId: string;
            apellido: string;
            puesto: string;
            fechaNacimiento: Date;
            domicilio: string;
            numEmergencia: string;
            tipoSangre: string;
            discapacidad: boolean;
            genero: string;
        })[];
        meta: {
            total: number;
            pagina: number;
            registros: number;
            totalPaginas: number;
        };
    }>;
    findOne(id: string): Promise<{
        sucursal: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombre: string;
        telefono: string;
        correo: string;
        sucursalId: string;
        apellido: string;
        puesto: string;
        fechaNacimiento: Date;
        domicilio: string;
        numEmergencia: string;
        tipoSangre: string;
        discapacidad: boolean;
        genero: string;
    }>;
    update(id: string, updateEmpleadoDto: UpdateEmpleadoDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombre: string;
        telefono: string;
        correo: string;
        sucursalId: string;
        apellido: string;
        puesto: string;
        fechaNacimiento: Date;
        domicilio: string;
        numEmergencia: string;
        tipoSangre: string;
        discapacidad: boolean;
        genero: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombre: string;
        telefono: string;
        correo: string;
        sucursalId: string;
        apellido: string;
        puesto: string;
        fechaNacimiento: Date;
        domicilio: string;
        numEmergencia: string;
        tipoSangre: string;
        discapacidad: boolean;
        genero: string;
    } | {
        statusCode: HttpStatus;
        message: string;
    }>;
}
