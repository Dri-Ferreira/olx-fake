import { Injectable } from '@nestjs/common';
import { States } from '@prisma/client';
import { ICreateStatesService } from '../structure/service.structure';
import { createStatesParams } from '../types/state-params-type';

@Injectable()
export class CreateStatesService implements ICreateStatesService {
  execute(params: createStatesParams): Promise<Partial<States>> {
    return;
  }
}
