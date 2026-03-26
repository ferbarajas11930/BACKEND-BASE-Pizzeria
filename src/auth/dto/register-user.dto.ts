import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';
import { roleUserList } from '../enum/user.enum';
import { UserRole } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterUserDto {
  @ApiProperty({
    example: 'Juan Pérez',
    minLength: 3,
    description: 'Full name of the user (minimum 3 characters)',
  })
  @IsString()
  @MinLength(3)
  name: string;


  @ApiPropertyOptional({
    enum: roleUserList,
    example: UserRole.WORKER,
    description: `User role (optional). Possible values: ${roleUserList.join(', ')}`,
  })
  @IsEnum(roleUserList, {
    message: `Possible role values are ${roleUserList}`,
  })
  @IsOptional()
  role: UserRole = UserRole.WORKER;

  @ApiProperty({
    example: 'juan123',
    description: 'Unique username for the user',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'Str0ngP@ssword!',
    description:
      'Strong password containing at least one uppercase letter, one lowercase letter, one number, and one special character',
  })
  @IsString()
  @IsStrongPassword()
  password: string;
}
