import { User } from '@prisma/client';
import { createUserParams } from '../types/paramsn-types';

export interface IUserRepository {
  createUser(params: createUserParams): Promise<User>;
}
