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
exports.InfoPizzeriaController = void 0;
const common_1 = require("@nestjs/common");
const info_pizzeria_service_1 = require("./info-pizzeria.service");
const create_info_pizzeria_dto_1 = require("./Dto/create-info-pizzeria.dto");
const update_info_pizzeria_dto_1 = require("./Dto/update-info-pizzeria.dto");
let InfoPizzeriaController = class InfoPizzeriaController {
    constructor(infoPizzeriaService) {
        this.infoPizzeriaService = infoPizzeriaService;
    }
    create(createInfoPizzeriaDto) {
        return this.infoPizzeriaService.create(createInfoPizzeriaDto);
    }
    findOne(id) {
        return this.infoPizzeriaService.findOne(id);
    }
    update(id, updateInfoPizzeriaDto) {
        return this.infoPizzeriaService.update(id, updateInfoPizzeriaDto);
    }
    remove(id) {
        return this.infoPizzeriaService.remove(id);
    }
};
exports.InfoPizzeriaController = InfoPizzeriaController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_info_pizzeria_dto_1.CreateInfoPizzeriaDto]),
    __metadata("design:returntype", void 0)
], InfoPizzeriaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('findB/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InfoPizzeriaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_info_pizzeria_dto_1.UpdateInfoPizzeriaDto]),
    __metadata("design:returntype", void 0)
], InfoPizzeriaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('remove/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InfoPizzeriaController.prototype, "remove", null);
exports.InfoPizzeriaController = InfoPizzeriaController = __decorate([
    (0, common_1.Controller)('info-pizzeria'),
    __metadata("design:paramtypes", [info_pizzeria_service_1.InfoPizzeriaService])
], InfoPizzeriaController);
//# sourceMappingURL=info-pizzeria.controller.js.map