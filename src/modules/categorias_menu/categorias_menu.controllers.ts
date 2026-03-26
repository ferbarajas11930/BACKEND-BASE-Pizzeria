import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { CategoriasMenuService } from './categorias_menu.service';
import { CreateCategoriasMenuDto } from './Dto/create-categorias_menu.dto';
import { UpdateCategoriasMenuDto } from './Dto/update-categorias_menu.dto';
import { PaginationDto } from 'src/common';

@Controller('categorias-menu')
export class CategoriasMenuController {
  constructor(private readonly categoriasMenuService: CategoriasMenuService) { }

  @Post('create')
  create(@Body() createCategoriasMenuDto: CreateCategoriasMenuDto) {
    return this.categoriasMenuService.create(createCategoriasMenuDto);
  }

  @Get('findAll')
  findAll(@Query() PaginationDto: PaginationDto) {
    return this.categoriasMenuService.findAll()
  }

  @Get('findB/:id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoriasMenuService.findOne(id)
  }

  @Patch('update/:id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateCategoriasMenuDto: UpdateCategoriasMenuDto) {
    return this.categoriasMenuService.update(id, updateCategoriasMenuDto)
  }

  @Delete('remove/:id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoriasMenuService.remove(id)
  }
}