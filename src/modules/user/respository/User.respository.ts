import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { IUserRepository } from '../structures/repository.structure';
import { createUserParams } from '../types/user-params-types';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}
  createUser(params: createUserParams): Promise<User> {
    return;
  }
}
