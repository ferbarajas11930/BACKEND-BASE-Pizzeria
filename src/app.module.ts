import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { CommonModule } from './common/common.module';
import { PrismaModule } from './database/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProveedoresModule } from './modules/Proveedores/proveedores.module';
import { CategoriasMenuModule } from './modules/categorias_menu/categorias_menu.module';
import { MenuModule } from './modules/menu/menu.module';
import { InfoPizzeriaModule } from './modules/info-pizzeria/info-pizzeria.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { SucursalesModule } from './modules/sucursales/sucursales.module';
import { TicketsModule } from './modules/tickets/tickets.module';
import { CajasModule } from './modules/cajas/cajas.module';
import { EmpleadosModule } from './modules/empleados/empleados.module';
import { DetallePedidoModule } from './modules/detalle-pedido/detalle-pedido.module';
import { PedidosModule } from './modules/pedidos/pedidos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/public'),
    }),
    EventEmitterModule.forRoot(),
    AuthModule,
    CommonModule,
    PrismaModule,
    UsersModule,
    ProveedoresModule,
    CategoriasMenuModule,
    MenuModule,
    InfoPizzeriaModule,
    ClientesModule,
    SucursalesModule,
    TicketsModule,
    CajasModule,
    EmpleadosModule,
    DetallePedidoModule,
    PedidosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
