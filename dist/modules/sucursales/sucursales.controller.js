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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SucursalesController = void 0;
const common_1 = require("@nestjs/common");
const sucursales_service_1 = require("./sucursales.service");
const create_sucursal_dto_1 = require("./dto/create-sucursal.dto");
const update_sucursal_dto_1 = require("./dto/update-sucursal.dto");
const common_2 = require("../../common");
let SucursalesController = class SucursalesController {
    constructor(sucursalesService) {
        this.sucursalesService = sucursalesService;
    }
    create(createSucursalDto) {
        return this.sucursalesService.create(createSucursalDto);
    }
    findAll(paginationDto) {
        return this.sucursalesService.findAll(paginationDto);
    }
    findOne(id) {
        return this.sucursalesService.findOne(id);
    }
    update(id, updateSucursalDto) {
        return this.sucursalesService.update(id, updateSucursalDto);
    }
    remove(id) {
        return this.sucursalesService.remove(id);
    }
};
exports.SucursalesController = SucursalesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sucursal_dto_1.CreateSucursalDto]),
    __metadata("design:returntype", void 0)
], SucursalesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_2.PaginationDto]),
    __metadata("design:returntype", void 0)
], SucursalesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SucursalesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sucursal_dto_1.UpdateSucursalDto]),
    __metadata("design:returntype", void 0)
], SucursalesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SucursalesController.prototype, "remove", null);
exports.SucursalesController = SucursalesController = __decorate([
    (0, common_1.Controller)('sucursales'),
    __metadata("design:paramtypes", [sucursales_service_1.SucursalesService])
], SucursalesController);
//# sourceMappingURL=sucursales.controller.js.map