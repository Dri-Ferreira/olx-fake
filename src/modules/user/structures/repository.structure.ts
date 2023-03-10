import { GetIdParams } from './../types/user-params-types';
import { States, User } from '@prisma/client';
import { createUserParams } from '../types/user-params-types';

export interface IUserRepository {
  create(params: createUserParams): Promise<User>;
  getAllStates(): Promise<Partial<States[]>>;
  existUser(where: Partial<User> | null): Promise<User>;
  getAllUser(): Promise<Partial<User[]>>;
  getUserId(params: GetIdParams): Promise<Partial<User>>;
}
