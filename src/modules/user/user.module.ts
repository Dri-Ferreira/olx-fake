import { Module } from '@nestjs/common';
import { CreateUserService } from './services/CreateUser.service';
import { UserController } from './user.controller';
import { UserRepository } from './respository/User.respository';
import { PrismaService } from 'src/database/prisma.service';
import { GetStatesAllService } from './services/GetStatesAll.service';
import { GetAllUsersService } from './services/GetAllUsers.service';
import { GetUserIdService } from './services/GetUserId.service';

@Module({
  controllers: [UserController],
  providers: [
    CreateUserService,
    UserRepository,
    GetStatesAllService,
    GetAllUsersService,
    GetUserIdService,
    PrismaService,
  ],
})
export class UserModule {}
