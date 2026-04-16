import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { InfoPizzeriaService } from './info-pizzeria.service';
import { CreateInfoPizzeriaDto } from './Dto/create-info-pizzeria.dto';
import { UpdateInfoPizzeriaDto } from './Dto/update-info-pizzeria.dto';
import { PaginationDto } from 'src/common';

@Controller('info-pizzeria')
export class InfoPizzeriaController {
  constructor(private readonly infoPizzeriaService: InfoPizzeriaService) {}

  @Post('create')
  create(@Body() createInfoPizzeriaDto: CreateInfoPizzeriaDto) {
    return this.infoPizzeriaService.create(createInfoPizzeriaDto);
  }

  // @Get('findAll')
  // findAll(@Query() PaginationDto: PaginationDto) {
  //   return this.infoPizzeriaService.findAll(PaginationDto)
  // }

  @Get('findB/:id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.infoPizzeriaService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateInfoPizzeriaDto: UpdateInfoPizzeriaDto) {
    return this.infoPizzeriaService.update(id, updateInfoPizzeriaDto);
  }

  @Delete('remove/:id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.infoPizzeriaService.remove(id);
  }
}
