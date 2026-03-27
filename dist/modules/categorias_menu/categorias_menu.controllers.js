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
exports.CategoriasMenuController = void 0;
const common_1 = require("@nestjs/common");
const categorias_menu_service_1 = require("./categorias_menu.service");
const create_categorias_menu_dto_1 = require("./Dto/create-categorias_menu.dto");
const update_categorias_menu_dto_1 = require("./Dto/update-categorias_menu.dto");
const common_2 = require("../../common");
let CategoriasMenuController = class CategoriasMenuController {
    constructor(categoriasMenuService) {
        this.categoriasMenuService = categoriasMenuService;
    }
    create(createCategoriasMenuDto) {
        return this.categoriasMenuService.create(createCategoriasMenuDto);
    }
    findAll(PaginationDto) {
        return this.categoriasMenuService.findAll();
    }
    findOne(id) {
        return this.categoriasMenuService.findOne(id);
    }
    update(id, updateCategoriasMenuDto) {
        return this.categoriasMenuService.update(id, updateCategoriasMenuDto);
    }
    remove(id) {
        return this.categoriasMenuService.remove(id);
    }
};
exports.CategoriasMenuController = CategoriasMenuController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_categorias_menu_dto_1.CreateCategoriasMenuDto]),
    __metadata("design:returntype", void 0)
], CategoriasMenuController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('findAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_2.PaginationDto]),
    __metadata("design:returntype", void 0)
], CategoriasMenuController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findB/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriasMenuController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_categorias_menu_dto_1.UpdateCategoriasMenuDto]),
    __metadata("design:returntype", void 0)
], CategoriasMenuController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('remove/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriasMenuController.prototype, "remove", null);
exports.CategoriasMenuController = CategoriasMenuController = __decorate([
    (0, common_1.Controller)('categorias-menu'),
    __metadata("design:paramtypes", [categorias_menu_service_1.CategoriasMenuService])
], CategoriasMenuController);
//# sourceMappingURL=categorias_menu.controllers.js.map