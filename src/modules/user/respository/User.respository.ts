import { Injectable } from '@nestjs/common';
import { States, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import exclude from 'src/validations/excludeProperties';
import { IUserRepository } from '../structures/repository.structure';
import {
  createUserParams,
  GetIdParams,
  IFindByEmail,
} from '../types/user-params-types';

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
    return this.prisma.states.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  async getAllUser(): Promise<Partial<User[]>> {
    const search = await this.prisma.user.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    search.map((user) => {
      exclude(user, 'passwordHash');
    });
    return search;
  }

  getUserId(params: GetIdParams): Promise<Partial<User>> {
    return this.prisma.user.findUnique({
      where: { id: params.id },
    });
  }
}
