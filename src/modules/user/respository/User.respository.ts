import { Injectable } from '@nestjs/common';
import { States, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import exclude from 'src/validations/excludeProperties';
import { IUserRepository } from '../structures/repository.structure';
import { createUserParams, IFindByEmail } from '../types/user-params-types';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}
  create(params: createUserParams): Promise<User> {
    return this.prisma.user.create({ data: { ...params } });
  }

  findByEmail(params: IFindByEmail): Promise<User> {
    return this.prisma.user.findFirst({ where: { email: params.email } });
  }

  getAllStates(): Promise<Partial<States[]>> {
    const search = this.prisma.states.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    return search;
  }

  async getAllUser(): Promise<Partial<User[]>> {
    const search = await this.prisma.user.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    for (let i = 0; i < search.length; i++) {
      exclude(search[i], 'passwordHash');
    }
    return search;
  }
}
