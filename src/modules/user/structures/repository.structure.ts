import { IFindByEmail } from './../types/user-params-types';
import { States, User } from '@prisma/client';
import { createUserParams } from '../types/user-params-types';

export interface IUserRepository {
  create(params: createUserParams): Promise<User>;
  getAllStates(): Promise<Partial<States[]>>;
  findByEmail(params: IFindByEmail): Promise<User | null>;
}
