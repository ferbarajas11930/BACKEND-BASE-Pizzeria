import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './Dto/create-menu.dto';
import { UpdateMenuDto } from './Dto/update-menu.dto';
import { PaginationDto } from 'src/common';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

@Post('create')
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @Get('findAll')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.menuService.findAll(paginationDto)
  }

  @Get('findB/:id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.menuService.findOne(id)
  }

  @Patch('update/:id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(id, updateMenuDto)
  }

  @Delete('remove/:id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.menuService.remove(id)
  }
}
