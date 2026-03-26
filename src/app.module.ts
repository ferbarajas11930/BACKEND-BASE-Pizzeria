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
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
