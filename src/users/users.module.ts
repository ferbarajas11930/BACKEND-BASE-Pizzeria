import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaExceptionHandlerService } from 'src/common';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaExceptionHandlerService],
})
export class UsersModule { }
