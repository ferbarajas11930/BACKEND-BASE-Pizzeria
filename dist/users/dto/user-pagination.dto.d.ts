import { StatusPaginationDto } from 'src/common/dto/status-pagination.dto';
import { UserRole } from '@prisma/client';
export declare class UserPaginationDto extends StatusPaginationDto<UserRole> {
    role: UserRole;
}
