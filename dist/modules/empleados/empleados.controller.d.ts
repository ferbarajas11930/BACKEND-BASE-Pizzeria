import { EmpleadosService } from './empleados.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { PaginationDto } from 'src/common';
export declare class EmpleadosController {
    private readonly empleadosService;
    constructor(empleadosService: EmpleadosService);
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
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
