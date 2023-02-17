import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { IAdsRepository } from '../structure/repository.structure';
import { createAdsParams } from '../types/ads-params-types';

@Injectable()
export class AdsRepository implements IAdsRepository {
  constructor(private readonly prisma: PrismaService) {}
  create(params: createAdsParams): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
