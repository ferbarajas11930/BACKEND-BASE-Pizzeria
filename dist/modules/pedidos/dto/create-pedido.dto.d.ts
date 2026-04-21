import { TipoEntrega } from '@prisma/client';
export declare class CreatePedidoDto {
    numeroMesa?: number;
    clienteId: string;
    sucursalId: string;
    tipoEntrega: TipoEntrega;
}
