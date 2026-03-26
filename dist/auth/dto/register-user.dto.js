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
exports.RegisterUserDto = void 0;
const class_validator_1 = require("class-validator");
const user_enum_1 = require("../enum/user.enum");
const client_1 = require("@prisma/client");
const swagger_1 = require("@nestjs/swagger");
class RegisterUserDto {
    constructor() {
        this.role = client_1.UserRole.WORKER;
    }
}
exports.RegisterUserDto = RegisterUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Juan Pérez',
        minLength: 3,
        description: 'Full name of the user (minimum 3 characters)',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: user_enum_1.roleUserList,
        example: client_1.UserRole.WORKER,
        description: `User role (optional). Possible values: ${user_enum_1.roleUserList.join(', ')}`,
    }),
    (0, class_validator_1.IsEnum)(user_enum_1.roleUserList, {
        message: `Possible role values are ${user_enum_1.roleUserList}`,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'juan123',
        description: 'Unique username for the user',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Str0ngP@ssword!',
        description: 'Strong password containing at least one uppercase letter, one lowercase letter, one number, and one special character',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsStrongPassword)(),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "password", void 0);
//# sourceMappingURL=register-user.dto.js.map