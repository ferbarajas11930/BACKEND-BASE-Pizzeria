import { PartialType } from '@nestjs/swagger';
import { CreateInfoPizzeriaDto } from './create-info-pizzeria.dto';

export class UpdateInfoPizzeriaDto extends PartialType(CreateInfoPizzeriaDto) {}
