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
import { DetallePedidoService } from './detalle-pedido.service';
import { CreateDetallePedidoDto } from './dto/create-detalle-pedido.dto';
import { UpdateDetallePedidoDto } from './dto/update-detalle-pedido.dto';
import { PaginationDto } from 'src/common';

@Controller('detalle-pedido')
export class DetallePedidoController {
  constructor(private readonly detallePedidoService: DetallePedidoService) {}

  @Post()
  create(@Body() createDetallePedidoDto: CreateDetallePedidoDto) {
    return this.detallePedidoService.create(createDetallePedidoDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.detallePedidoService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.detallePedidoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDetallePedidoDto: UpdateDetallePedidoDto,
  ) {
    return this.detallePedidoService.update(id, updateDetallePedidoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.detallePedidoService.remove(id);
  }
}
