import { Injectable } from '@nestjs/common';
import { States, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { IUserRepository } from '../structures/repository.structure';
import { createUserParams } from '../types/user-params-types';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}
  create(params: createUserParams): Promise<User> {
    const data = {
      name: params.name,
      email: params.email,
      state: params.state,
    };
    return this.prisma.user.create({
      data: {
        ...data,
        passwordHash: params.passwordHash,
      },
    });
  }

  async getAllStates(): Promise<Partial<States[]>> {
    const tudo = this.prisma.states.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    return tudo;
  }
}
