import { Injectable } from '@nestjs/common';
import { States } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { IstatesRepository } from '../structure/repository.structure';
import { createStatesParams } from '../types/state-params-type';

@Injectable()
export class StatesRepositoy implements IstatesRepository {
  constructor(private readonly prisma: PrismaService) {}

  createStates(params: createStatesParams): Promise<States> {
    return this.prisma.states.create({
      data: { ...params },
    });
  }

  searchStates(params: createStatesParams): Promise<States | null> {
    return this.prisma.states.findFirst({ where: { name: params.name } });
  }
}
