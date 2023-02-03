import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './repository/auth.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthController, AuthService, AuthRepository, PrismaService],
})
export class AuthModule {}
