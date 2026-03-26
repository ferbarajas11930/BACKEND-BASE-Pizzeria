import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class StatusPaginationDto<T> extends PaginationDto {
  @IsOptional()
  @IsEnum(Object, {
    message: (args) => `Valid status are: ${args.constraints[0].join(', ')}`,
  })
  status: T;
}
