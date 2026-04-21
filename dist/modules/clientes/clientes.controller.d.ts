import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PaginationDto } from 'src/common';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    create(createClienteDto: CreateClienteDto): Promise<import("@nestjs/common").HttpException | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombre: string;
        telefono: string;
        email: string;
        direccion: string;
        cumpleanos: Date | null;
        referencias: string | null;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            disponible: boolean;
            nombre: string;
            telefono: string;
            email: string;
            direccion: string;
            cumpleanos: Date | null;
            referencias: string | null;
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
        email: string;
        direccion: string;
        cumpleanos: Date | null;
        referencias: string | null;
    }>;
    update(id: string, updateClienteDto: UpdateClienteDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombre: string;
        telefono: string;
        email: string;
        direccion: string;
        cumpleanos: Date | null;
        referencias: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        disponible: boolean;
        nombre: string;
        telefono: string;
        email: string;
        direccion: string;
        cumpleanos: Date | null;
        referencias: string | null;
    } | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
