import { UserRole } from '@prisma/client';
import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { roleUserList } from '../enum/user.enum';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsEnum(roleUserList, {
    message: `Possible role values are ${roleUserList}`,
  })
  @IsOptional()
  role: UserRole = UserRole.WORKER;

  @IsString()
  @MinLength(3)
  username: string;

  @IsString()
  @MinLength(6)
  password: string;
}
