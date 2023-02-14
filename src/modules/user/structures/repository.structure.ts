import { IFindByEmail, GetIdParams } from './../types/user-params-types';
import { States, User } from '@prisma/client';
import { createUserParams } from '../types/user-params-types';

export interface IUserRepository {
  create(params: createUserParams): Promise<User>;
  getAllStates(): Promise<Partial<States[]>>;
  findByEmail(params: IFindByEmail): Promise<User | null>;
  getAllUser(): Promise<Partial<User[]>>;
  getUserId(params: GetIdParams): Promise<Partial<User>>;
}
