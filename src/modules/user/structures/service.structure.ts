import { States, User } from '@prisma/client';
import { createUserParams } from '../types/user-params-types';
export interface ICreateUserService {
  execute(params: createUserParams): Promise<Partial<User>>;
}

export interface IGetStatesService {
  execute(): Promise<Partial<States[]>>;
}
