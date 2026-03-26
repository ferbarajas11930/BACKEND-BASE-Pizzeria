import { UserRole } from '@prisma/client';
export declare class RegisterUserDto {
    name: string;
    role: UserRole;
    username: string;
    password: string;
}
