import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDto } from 'src/common';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            name: string;
            role: import("@prisma/client").$Enums.UserRole;
            username: string;
            password: string;
            id: string;
            available: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
        meta: {
            total: number;
            page: number;
            perPage: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        role: import("@prisma/client").$Enums.UserRole;
        username: string;
        password: string;
        id: string;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        name: string;
        role: import("@prisma/client").$Enums.UserRole;
        username: string;
        password: string;
        id: string;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        role: import("@prisma/client").$Enums.UserRole;
        username: string;
        password: string;
        id: string;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
