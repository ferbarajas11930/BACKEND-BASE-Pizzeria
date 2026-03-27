import { CreateProveedoresDto } from "./Dto/create-proveedores.dto";
import { UpdateProveedoresDto } from "./Dto/update-proveedores.dto";
import { PrismaService } from "src/database/prisma.service";
import { PaginationDto, PrismaExceptionHandlerService } from "src/common";
export declare class ProveedoresService {
    private readonly prisma;
    private readonly prismaExceptionHandlerService;
    constructor(prisma: PrismaService, prismaExceptionHandlerService: PrismaExceptionHandlerService);
    create(createProvedorDto: CreateProveedoresDto): Promise<import("@nestjs/common").HttpException | {
        id: string;
        nombreProveedor: string;
        telefonoProveedor: string;
        domicilioProveedor: string;
        rfcProveedor: string;
        emailProveedor: string;
        tipoProducto: string;
        disponible: boolean | null;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            nombreProveedor: string;
            telefonoProveedor: string;
            domicilioProveedor: string;
            rfcProveedor: string;
            emailProveedor: string;
            tipoProducto: string;
            disponible: boolean | null;
        }[];
        meta: {
            total: number;
            pagina: number;
            registro: number;
            totalPaginas: number;
        };
    }>;
    findOne(id: string): Promise<{
        id: string;
        nombreProveedor: string;
        telefonoProveedor: string;
        domicilioProveedor: string;
        rfcProveedor: string;
        emailProveedor: string;
        tipoProducto: string;
        disponible: boolean | null;
    }>;
    update(id: string, updateProveedorDto: UpdateProveedoresDto): Promise<{
        id: string;
        nombreProveedor: string;
        telefonoProveedor: string;
        domicilioProveedor: string;
        rfcProveedor: string;
        emailProveedor: string;
        tipoProducto: string;
        disponible: boolean | null;
    } | undefined>;
    remove(id: string): Promise<{
        id: string;
        nombreProveedor: string;
        telefonoProveedor: string;
        domicilioProveedor: string;
        rfcProveedor: string;
        emailProveedor: string;
        tipoProducto: string;
        disponible: boolean | null;
    }>;
}
