import { UserRole } from '@prisma/client';
export declare class CreateUserDto {
    name: string;
    role: UserRole;
    username: string;
    password: string;
}
