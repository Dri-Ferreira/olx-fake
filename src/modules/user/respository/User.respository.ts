import { Injectable } from '@nestjs/common';
import { States, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { IUserRepository } from '../structures/repository.structure';
import { createUserParams, IFindByEmail } from '../types/user-params-types';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}
  create(params: createUserParams): Promise<User> {
    return this.prisma.user.create({ data: { ...params } });
  }

  async findByEmail(params: IFindByEmail): Promise<User> {
    return this.prisma.user.findFirst({ where: { email: params.email } });
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
