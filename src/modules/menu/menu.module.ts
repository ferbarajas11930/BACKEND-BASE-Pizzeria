import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { PrismaExceptionHandlerService } from "src/common";
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [MenuController],
  providers: [MenuService, PrismaService, PrismaExceptionHandlerService],
})

export class MenuModule { }
