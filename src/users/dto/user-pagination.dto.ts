import { StatusPaginationDto } from 'src/common/dto/status-pagination.dto';
import { UserRole } from '@prisma/client';
import { roleUserList } from '../enum/user.enum';
import { IsEnum } from 'class-validator';

export class UserPaginationDto extends StatusPaginationDto<UserRole> {
  @IsEnum(roleUserList, {
    message: `Valid roles are: ${roleUserList.join(', ')}`,
  })
  role: UserRole;
}
