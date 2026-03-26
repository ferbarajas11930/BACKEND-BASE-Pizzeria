
import { Module } from "@nestjs/common";
import { ProveedoresController } from "./proveedores.controllers";
import { ProveedoresService } from "./proveedores.service";
import { PrismaExceptionHandlerService } from "src/common";

@Module({
    controllers: [ProveedoresController],
    providers: [ProveedoresService, PrismaExceptionHandlerService],
})

export class ProveedoresModule { }
