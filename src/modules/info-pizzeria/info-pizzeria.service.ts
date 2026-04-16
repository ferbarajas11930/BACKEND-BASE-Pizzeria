import { HttpStatus, Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateInfoPizzeriaDto } from './Dto/create-info-pizzeria.dto';
import { UpdateInfoPizzeriaDto } from './Dto/update-info-pizzeria.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaExceptionHandlerService } from 'src/common';

@Injectable()
export class InfoPizzeriaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaExceptionHandler: PrismaExceptionHandlerService
  ) { }

  async create(createInfoPizzeriaDto: CreateInfoPizzeriaDto) {
    try {
      // 1. Antes de insertar valida si la tabla está vacía
      const count = await this.prisma.infoPizzeria.count();
      // 2. Si ya existe un registro lanza el mensaje 
      if (count > 0) {
        throw new BadRequestException('Solo se permite un registro en este módulo.');
      }
      // 3. Si no existe ningún registro, permite guardar
      return await this.prisma.infoPizzeria.create({
        data: createInfoPizzeriaDto
      });
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      // Para otros errores
      return this.prismaExceptionHandler.handleDBException(error);
    }
  }

  async findOne(id: string) {
    const infoPizza = await this.prisma.infoPizzeria.findFirst({
      where: { id }
    });
    // Valida que el registro exista
    if (!infoPizza) {
      throw new NotFoundException(`El registro con id ${id} no existe`);
    }
    // Retorna el registro
    return infoPizza;
  }

  async update(id: string, updateInfoPizzeriaDto: UpdateInfoPizzeriaDto) {
    try {
      // Valida primero que el ID exista usando el método findOne
      await this.findOne(id);

      return await this.prisma.infoPizzeria.update({
        where: { id },
        data: updateInfoPizzeriaDto
      });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      return this.prismaExceptionHandler.handleDBException(error);
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);
      return await this.prisma.infoPizzeria.delete({
        where: { id }
      });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      return this.prismaExceptionHandler.handleDBException(error);
    }
  }
}