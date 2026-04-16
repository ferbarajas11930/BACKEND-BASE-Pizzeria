"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoPizzeriaModule = void 0;
const common_1 = require("@nestjs/common");
const info_pizzeria_service_1 = require("./info-pizzeria.service");
const info_pizzeria_controller_1 = require("./info-pizzeria.controller");
const common_2 = require("../../common");
let InfoPizzeriaModule = class InfoPizzeriaModule {
};
exports.InfoPizzeriaModule = InfoPizzeriaModule;
exports.InfoPizzeriaModule = InfoPizzeriaModule = __decorate([
    (0, common_1.Module)({
        controllers: [info_pizzeria_controller_1.InfoPizzeriaController],
        providers: [info_pizzeria_service_1.InfoPizzeriaService, common_2.PrismaExceptionHandlerService],
    })
], InfoPizzeriaModule);
//# sourceMappingURL=info-pizzeria.module.js.map