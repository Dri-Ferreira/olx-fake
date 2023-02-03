import { StatesRepositoy } from './../repository/States.repository';
import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { States } from '@prisma/client';
import { ICreateStatesService } from '../structure/service.structure';
import { createStatesParams } from '../types/state-params-type';

@Injectable()
export class CreateStatesService implements ICreateStatesService {
  constructor(
    @Inject(StatesRepositoy)
    private readonly statesRepository: StatesRepositoy,
  ) {}
  async execute(params: createStatesParams): Promise<Partial<States>> {
    const searchStates = await this.statesRepository.searchStates({
      name: params.name,
    });
    if (searchStates) {
      throw new ForbiddenException('States already exists !');
    }
    const createStates = await this.statesRepository.createStates(params);
    return createStates;
  }
}
