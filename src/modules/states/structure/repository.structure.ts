import { States } from '@prisma/client';
import { createStatesParams } from './../types/state-params-type';
export interface IstatesRepository {
  createStates(params: createStatesParams): Promise<States>;
  searchStates(params: createStatesParams): Promise<States>;
}
