import { Module } from '@nestjs/common';
import { CategoriasMenuService } from './categorias_menu.service';
import { CategoriasMenuController } from './categorias_menu.controller';
import { PrismaExceptionHandlerService } from 'src/common';

@Module({
  controllers: [CategoriasMenuController],
  providers: [CategoriasMenuService, PrismaExceptionHandlerService],
})
export class CategoriasMenuModule {}
