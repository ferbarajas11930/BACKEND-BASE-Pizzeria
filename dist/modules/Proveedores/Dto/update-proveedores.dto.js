"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProveedoresDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_proveedores_dto_1 = require("./create-proveedores.dto");
class UpdateProveedoresDto extends (0, swagger_1.PartialType)(create_proveedores_dto_1.CreateProveedoresDto) {
}
exports.UpdateProveedoresDto = UpdateProveedoresDto;
//# sourceMappingURL=update-proveedores.dto.js.map