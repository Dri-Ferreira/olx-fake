import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/database/prisma.service';
import { JwtStrategy } from 'src/middleware/jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './repository/auth.repository';

@Module({
  imports: [PassportModule],
  controllers: [AuthController],
  providers: [
    AuthController,
    AuthService,
    JwtStrategy,
    AuthRepository,
    PrismaService,
  ],
})
export class AuthModule {}
