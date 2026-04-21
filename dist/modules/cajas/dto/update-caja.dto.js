"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCajaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_caja_dto_1 = require("./create-caja.dto");
class UpdateCajaDto extends (0, swagger_1.PartialType)(create_caja_dto_1.CreateCajaDto) {
}
exports.UpdateCajaDto = UpdateCajaDto;
//# sourceMappingURL=update-caja.dto.js.map