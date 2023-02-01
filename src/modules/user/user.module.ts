import { Module } from '@nestjs/common';
import { CreateUserService } from './services/CreateUser.service';
import { UserController } from './user.controller';
import { UserRepository } from './respositories/User.respository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [UserController],
  providers: [CreateUserService, UserRepository, PrismaService],
})
export class UserModule {}
