import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from '../respositories/User.respository';
import { ICreateUserService } from '../structures/service.structure';
import { createUserParams } from '../types/paramsn-types';

Injectable();
export class CreateUserService implements ICreateUserService {
  constructor(private readonly userRepository: UserRepository) {}
  execute(params: createUserParams): Promise<Partial<User>> {
    return;
  }
}
