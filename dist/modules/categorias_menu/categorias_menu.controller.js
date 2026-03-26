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
const create_categorias_menu_dto_1 = require("./dto/create-categorias_menu.dto");
const update_categorias_menu_dto_1 = require("./dto/update-categorias_menu.dto");
let CategoriasMenuController = class CategoriasMenuController {
    constructor(categoriasMenuService) {
        this.categoriasMenuService = categoriasMenuService;
    }
    create(createCategoriasMenuDto) {
        return this.categoriasMenuService.create(createCategoriasMenuDto);
    }
    findAll() {
        return this.categoriasMenuService.findAll();
    }
    findOne(id) {
        return this.categoriasMenuService.findOne(+id);
    }
    update(id, updateCategoriasMenuDto) {
        return this.categoriasMenuService.update(+id, updateCategoriasMenuDto);
    }
    remove(id) {
        return this.categoriasMenuService.remove(+id);
    }
};
exports.CategoriasMenuController = CategoriasMenuController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_categorias_menu_dto_1.CreateCategoriasMenuDto]),
    __metadata("design:returntype", void 0)
], CategoriasMenuController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoriasMenuController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriasMenuController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_categorias_menu_dto_1.UpdateCategoriasMenuDto]),
    __metadata("design:returntype", void 0)
], CategoriasMenuController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriasMenuController.prototype, "remove", null);
exports.CategoriasMenuController = CategoriasMenuController = __decorate([
    (0, common_1.Controller)('categorias-menu'),
    __metadata("design:paramtypes", [categorias_menu_service_1.CategoriasMenuService])
], CategoriasMenuController);
//# sourceMappingURL=categorias_menu.controller.js.map