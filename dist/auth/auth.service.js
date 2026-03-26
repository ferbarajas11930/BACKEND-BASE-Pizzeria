"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../database/prisma.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async register(registerUserDto) {
        try {
            const { password, ...userData } = registerUserDto;
            const hashedPassword = bcrypt.hashSync(password, 10);
            const user = await this.prisma.user.create({
                data: {
                    ...userData,
                    password: hashedPassword,
                },
            });
            return {
                ...user,
                token: this.getJwtToken({ id: user.id, username: user.username, role: user.role }),
            };
        }
        catch (error) {
            this.handleDBException(error);
        }
    }
    async login(loginUserDto) {
        const { username, password } = loginUserDto;
        const user = await this.prisma.user.findUnique({
            where: { username },
        });
        if (!user)
            throw new common_1.UnauthorizedException('Invalid credentials - Username');
        if (!bcrypt.compareSync(password, user.password))
            throw new common_1.UnauthorizedException('Invalid credentials - Password');
        return {
            id: user.id,
            username: user.username,
            token: this.getJwtToken({ id: user.id, username: user.username, role: user.role }),
        };
    }
    async verifyToken(token) {
        try {
            const decoded = this.jwtService.verify(token);
            const user = await this.prisma.user.findUnique({
                where: { id: decoded.id },
            });
            if (!user)
                throw new common_1.UnauthorizedException('Invalid token');
            return user;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid or expired token');
        }
    }
    getJwtToken(payload) {
        return this.jwtService.sign(payload);
    }
    handleDBException(error) {
        if (error.code === 'P2002')
            throw new common_1.BadRequestException('Duplicate entry');
        console.error(error);
        throw new common_1.InternalServerErrorException('Unexpected error, check logs');
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map