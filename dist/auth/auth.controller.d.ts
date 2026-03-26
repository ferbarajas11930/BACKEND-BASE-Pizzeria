import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerUser(registerUserDto: RegisterUserDto): Promise<{
        token: string;
        name: string;
        role: import("@prisma/client").$Enums.UserRole;
        username: string;
        password: string;
        id: string;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    loginUser(loginUserDto: LoginUserDto): Promise<{
        id: string;
        username: string;
        token: string;
    }>;
    verifyToken(token: string): Promise<{
        name: string;
        role: import("@prisma/client").$Enums.UserRole;
        username: string;
        password: string;
        id: string;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
