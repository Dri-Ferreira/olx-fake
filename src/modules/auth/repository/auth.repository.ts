import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { IAuthRepository } from '../structure/repository.strucuture';

@Injectable()
export class AuthRepository implements IAuthRepository {
  constructor(private readonly prisma: PrismaService) {}
  existsUser(where: Partial<User>): Promise<User> {
    return this.prisma.user.findUnique({ where });
  }
}
