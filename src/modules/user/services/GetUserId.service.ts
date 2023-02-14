import { GetIdParams } from './../types/user-params-types';
import { Inject, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from '../respository/User.respository';
import { IGetUserIdService } from '../structures/service.structure';
Injectable();
export class GetUserIdService implements IGetUserIdService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}

  async execute(params: GetIdParams): Promise<Partial<User>> {
    const user = await this.userRepository.getUserId(params);
    return { ...user, passwordHash: undefined };
  }
}
