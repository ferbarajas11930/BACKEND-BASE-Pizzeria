"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasMenuModule = void 0;
const common_1 = require("@nestjs/common");
const categorias_menu_service_1 = require("./categorias_menu.service");
const categorias_menu_controller_1 = require("./categorias_menu.controller");
let CategoriasMenuModule = class CategoriasMenuModule {
};
exports.CategoriasMenuModule = CategoriasMenuModule;
exports.CategoriasMenuModule = CategoriasMenuModule = __decorate([
    (0, common_1.Module)({
        controllers: [categorias_menu_controller_1.CategoriasMenuController],
        providers: [categorias_menu_service_1.CategoriasMenuService],
    })
], CategoriasMenuModule);
//# sourceMappingURL=categorias_menu.module.js.map