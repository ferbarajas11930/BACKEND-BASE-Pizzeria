import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CajasService } from './cajas.service';
import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';
import { PaginationDto } from 'src/common';

@Controller('cajas')
export class CajasController {
  constructor(private readonly cajasService: CajasService) {}

  @Post()
  create(@Body() createCajaDto: CreateCajaDto) {
    return this.cajasService.create(createCajaDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.cajasService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.cajasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCajaDto: UpdateCajaDto,
  ) {
    return this.cajasService.update(id, updateCajaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.cajasService.remove(id);
  }
}
