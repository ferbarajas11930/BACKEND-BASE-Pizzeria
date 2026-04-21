import { HttpStatus } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';
export declare class EmpleadosService {
    private readonly prisma;
    private readonly prismaExceptionHandler;
    constructor(prisma: PrismaService, prismaExceptionHandler: PrismaExceptionHandlerService);
    create(createEmpleadoDto: CreateEmpleadoDto): Promise<{
        id: string;
        nombre: string;
        apellido: string;
        puesto: string;
        fechaNacimiento: Date;
        domicilio: string;
        telefono: string;
        correo: string;
        numEmergencia: string;
        tipoSangre: string;
        discapacidad: boolean;
        genero: string;
        sucursalId: string;
        disponible: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | import("@nestjs/common").HttpException>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: ({
            sucursal: {
                id: string;
                nombre: string;
                telefono: string;
                disponible: boolean;
                createdAt: Date;
                updatedAt: Date;
                direccion: string;
                responsable: string;
                municipio: string;
                estado: string;
                cp: string;
                horario: string;
            };
        } & {
            id: string;
            nombre: string;
            apellido: string;
            puesto: string;
            fechaNacimiento: Date;
            domicilio: string;
            telefono: string;
            correo: string;
            numEmergencia: string;
            tipoSangre: string;
            discapacidad: boolean;
            genero: string;
            sucursalId: string;
            disponible: boolean;
            createdAt: Date;
            updatedAt: Date;
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
            nombre: string;
            telefono: string;
            disponible: boolean;
            createdAt: Date;
            updatedAt: Date;
            direccion: string;
            responsable: string;
            municipio: string;
            estado: string;
            cp: string;
            horario: string;
        };
    } & {
        id: string;
        nombre: string;
        apellido: string;
        puesto: string;
        fechaNacimiento: Date;
        domicilio: string;
        telefono: string;
        correo: string;
        numEmergencia: string;
        tipoSangre: string;
        discapacidad: boolean;
        genero: string;
        sucursalId: string;
        disponible: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateEmpleadoDto: UpdateEmpleadoDto): Promise<{
        id: string;
        nombre: string;
        apellido: string;
        puesto: string;
        fechaNacimiento: Date;
        domicilio: string;
        telefono: string;
        correo: string;
        numEmergencia: string;
        tipoSangre: string;
        discapacidad: boolean;
        genero: string;
        sucursalId: string;
        disponible: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        nombre: string;
        apellido: string;
        puesto: string;
        fechaNacimiento: Date;
        domicilio: string;
        telefono: string;
        correo: string;
        numEmergencia: string;
        tipoSangre: string;
        discapacidad: boolean;
        genero: string;
        sucursalId: string;
        disponible: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | {
        statusCode: HttpStatus;
        message: string;
    }>;
}
