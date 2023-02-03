import { States, User } from '@prisma/client';
import { createUserParams } from '../types/user-params-types';

export interface IUserRepository {
  createUser(params: createUserParams): Promise<User>;
  getAllStates(): Promise<Partial<States[]>>;
}
