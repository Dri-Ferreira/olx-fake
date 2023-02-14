import { States, User } from '@prisma/client';
import { createUserParams, GetIdParams } from '../types/user-params-types';
export interface ICreateUserService {
  execute(params: createUserParams): Promise<Partial<User>>;
}

export interface IGetStatesService {
  execute(): Promise<Partial<States[]>>;
}

export interface IGetUsersService {
  execute(): Promise<Partial<User[]>>;
}

export interface IGetUserIdService {
  execute(params: GetIdParams): Promise<Partial<User>>;
}
