import { ValidRoles } from '../interfaces';
export declare const META_ROLES = "role";
export declare const RoleProtected: (...args: ValidRoles[]) => import("@nestjs/common").CustomDecorator<string>;
