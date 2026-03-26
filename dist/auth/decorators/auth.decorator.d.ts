import { ValidRoles } from '../interfaces';
export declare function Auth(...role: ValidRoles[]): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
