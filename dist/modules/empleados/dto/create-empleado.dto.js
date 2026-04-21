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
exports.CreateEmpleadoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEmpleadoDto {
}
exports.CreateEmpleadoDto = CreateEmpleadoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'Daniel' }),
    __metadata("design:type", String)
], CreateEmpleadoDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'Gonzalez' }),
    __metadata("design:type", String)
], CreateEmpleadoDto.prototype, "apellido", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'Empleado' }),
    __metadata("design:type", String)
], CreateEmpleadoDto.prototype, "puesto", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ example: '28/08/2000' }),
    __metadata("design:type", String)
], CreateEmpleadoDto.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'Av. Juan' }),
    __metadata("design:type", String)
], CreateEmpleadoDto.prototype, "domicilio", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: '31710004555' }),
    __metadata("design:type", String)
], CreateEmpleadoDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({ example: 'daniel@gmail.com' }),
    __metadata("design:type", String)
], CreateEmpleadoDto.prototype, "correo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: '2222222' }),
    __metadata("design:type", String)
], CreateEmpleadoDto.prototype, "numEmergencia", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'A-' }),
    __metadata("design:type", String)
], CreateEmpleadoDto.prototype, "tipoSangre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ example: 'Invalido' }),
    __metadata("design:type", Boolean)
], CreateEmpleadoDto.prototype, "discapacidad", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'Masculino' }),
    __metadata("design:type", String)
], CreateEmpleadoDto.prototype, "genero", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ example: '675ace67-6b00-42ee-9ba2-c06939a3334f' }),
    __metadata("design:type", String)
], CreateEmpleadoDto.prototype, "sucursalId", void 0);
//# sourceMappingURL=create-empleado.dto.js.map