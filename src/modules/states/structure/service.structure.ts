import { States } from '@prisma/client';
import { createStatesParams } from '../types/state-params-type';
export interface ICreateStatesService {
  execute(params: createStatesParams): Promise<Partial<States>>;
}
