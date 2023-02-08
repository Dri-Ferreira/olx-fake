import { Inject, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from '../respository/User.respository';
import { IGetUsersService } from '../structures/service.structure';
Injectable();
export class GetAllUsersService implements IGetUsersService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}

  async execute(): Promise<Partial<User[]>> {
    return await this.userRepository.getAllUser();
  }
}
