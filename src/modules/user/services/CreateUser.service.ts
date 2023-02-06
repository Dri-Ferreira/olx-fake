import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from '../respository/User.respository';
import { ICreateUserService } from '../structures/service.structure';
import { createUserParams } from '../types/user-params-types';
import * as bcrypt from 'bcrypt';

Injectable();
export class CreateUserService implements ICreateUserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}
  async execute(params: createUserParams): Promise<Partial<User>> {
    const existsUser = await this.userRepository.findByEmail(params);
    if (existsUser) {
      throw new BadRequestException('Email already exists!');
    }
    const passwordHash = await bcrypt.hash(params.passwordHash, 10);
    const user = await this.userRepository.create({
      name: params.name,
      email: params.email,
      state: params.state,
      passwordHash: passwordHash,
    });
    return user;
  }
}
