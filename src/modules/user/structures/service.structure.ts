import { User } from '@prisma/client';
import { createUserParams } from './../types/paramsn-types';
export interface ICreateUserService {
  execute(params: createUserParams): Promise<Partial<User>>;
}
