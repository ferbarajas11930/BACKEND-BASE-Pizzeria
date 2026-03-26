import { ProveedoresService } from "./proveedores.service";
import { CreateProveedoresDto } from "./Dto/create-proveedores.dto";
import { UpdateProveedoresDto } from "./Dto/update-proveedores.dto";
import { PaginationDto } from "src/common";
export declare class ProveedoresController {
    private readonly proveedoresService;
    constructor(proveedoresService: ProveedoresService);
    create(createProveedorDto: CreateProveedoresDto): Promise<import("@nestjs/common").HttpException | {
        id: string;
        nombreProveedor: string;
        telefonoProveedor: string;
        domicilioProveedor: string;
        rfcProveedor: string;
        emailProveedor: string;
        tipoProducto: string;
    }>;
    findAll(PaginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            nombreProveedor: string;
            telefonoProveedor: string;
            domicilioProveedor: string;
            rfcProveedor: string;
            emailProveedor: string;
            tipoProducto: string;
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
    }>;
    update(id: string, updateProveedores: UpdateProveedoresDto): Promise<{
        id: string;
        nombreProveedor: string;
        telefonoProveedor: string;
        domicilioProveedor: string;
        rfcProveedor: string;
        emailProveedor: string;
        tipoProducto: string;
    } | undefined>;
    remove(id: string): Promise<{
        id: string;
        nombreProveedor: string;
        telefonoProveedor: string;
        domicilioProveedor: string;
        rfcProveedor: string;
        emailProveedor: string;
        tipoProducto: string;
    }>;
}
