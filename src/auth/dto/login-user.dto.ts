import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    example: 'juan123',
    description: 'Unique username used to login',
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
