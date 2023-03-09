import { Inject, Injectable } from '@nestjs/common';
import { States } from '@prisma/client';
import { UserRepository } from '../respository/User.respository';
import { IUserRepository } from '../structures/repository.structure';
import { IGetStatesService } from '../structures/service.structure';

Injectable();
export class GetStatesAllService implements IGetStatesService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: IUserRepository,
  ) {}
  async execute(): Promise<Partial<States[]>> {
    return await this.userRepository.getAllStates();
  }
}
