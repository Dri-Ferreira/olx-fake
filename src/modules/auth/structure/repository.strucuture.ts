import { User } from '@prisma/client';

export interface IAuthRepository {
  existsUser(where: Partial<User>): Promise<User>;
}
