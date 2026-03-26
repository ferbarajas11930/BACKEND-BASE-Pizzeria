import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto, PrismaExceptionHandlerService } from 'src/common';
export declare class UsersService {
    private readonly prisma;
    private readonly prismaExceptionHandler;
    constructor(prisma: PrismaService, prismaExceptionHandler: PrismaExceptionHandlerService);
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
