
import { PartialType } from "@nestjs/swagger";
import { CreateProveedoresDto } from "./create-proveedores.dto";

export class UpdateProveedoresDto extends PartialType(CreateProveedoresDto) { }

