import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Query } from "@nestjs/common";
import { ProveedoresService } from "./proveedores.service";
import { CreateProveedoresDto } from "./Dto/create-proveedores.dto";
import { UpdateProveedoresDto } from "./Dto/update-proveedores.dto";
import { PaginationDto } from "src/common";

@Controller('proveedores')
export class ProveedoresController {
    constructor(private readonly proveedoresService: ProveedoresService) { }

    @Post('create')
    create(@Body() createProveedorDto: CreateProveedoresDto) {
        return this.proveedoresService.create(createProveedorDto)
    }

    @Get('findAll')
    findAll(@Query() PaginationDto: PaginationDto) {
        return this.proveedoresService.findAll(PaginationDto)
    }

    @Get('findB/:id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.proveedoresService.findOne(id)
    }
    @Patch('update/:id')
    update(@Param('id', ParseUUIDPipe) id: string, @Body() updateProveedores: UpdateProveedoresDto) {
        return this.proveedoresService.update(id, updateProveedores)
    }

    @Delete('remove/:id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.proveedoresService.remove(id)
    }
}