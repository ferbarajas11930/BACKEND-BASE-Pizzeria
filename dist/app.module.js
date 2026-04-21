"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./config/configuration");
const event_emitter_1 = require("@nestjs/event-emitter");
const common_module_1 = require("./common/common.module");
const prisma_module_1 = require("./database/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const proveedores_module_1 = require("./modules/Proveedores/proveedores.module");
const categorias_menu_module_1 = require("./modules/categorias_menu/categorias_menu.module");
const menu_module_1 = require("./modules/menu/menu.module");
const info_pizzeria_module_1 = require("./modules/info-pizzeria/info-pizzeria.module");
const clientes_module_1 = require("./modules/clientes/clientes.module");
const sucursales_module_1 = require("./modules/sucursales/sucursales.module");
const tickets_module_1 = require("./modules/tickets/tickets.module");
const cajas_module_1 = require("./modules/cajas/cajas.module");
const empleados_module_1 = require("./modules/empleados/empleados.module");
const detalle_pedido_module_1 = require("./modules/detalle-pedido/detalle-pedido.module");
const pedidos_module_1 = require("./modules/pedidos/pedidos.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', '/public'),
            }),
            event_emitter_1.EventEmitterModule.forRoot(),
            auth_module_1.AuthModule,
            common_module_1.CommonModule,
            prisma_module_1.PrismaModule,
            users_module_1.UsersModule,
            proveedores_module_1.ProveedoresModule,
            categorias_menu_module_1.CategoriasMenuModule,
            menu_module_1.MenuModule,
            info_pizzeria_module_1.InfoPizzeriaModule,
            clientes_module_1.ClientesModule,
            sucursales_module_1.SucursalesModule,
            tickets_module_1.TicketsModule,
            cajas_module_1.CajasModule,
            empleados_module_1.EmpleadosModule,
            detalle_pedido_module_1.DetallePedidoModule,
            pedidos_module_1.PedidosModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map