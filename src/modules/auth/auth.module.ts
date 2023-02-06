import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/database/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './repository/auth.repository';

@Module({
  imports: [PassportModule],
  controllers: [AuthController],
  providers: [
    AuthController,
    AuthService,
    AuthRepository,
    JwtService,
    PrismaService,
  ],
})
export class AuthModule {}
