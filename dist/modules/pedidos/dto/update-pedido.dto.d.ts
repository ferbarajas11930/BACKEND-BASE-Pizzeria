import { CreatePedidoDto } from './create-pedido.dto';
import { EstadoPedido } from '@prisma/client';
declare const UpdatePedidoDto_base: import("@nestjs/common").Type<Partial<CreatePedidoDto>>;
export declare class UpdatePedidoDto extends UpdatePedidoDto_base {
    estado?: EstadoPedido;
}
export {};
