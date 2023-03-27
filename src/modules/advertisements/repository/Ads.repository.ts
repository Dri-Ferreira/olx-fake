import { Injectable } from '@nestjs/common';
import { Advertisements } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { IAdsRepository } from '../structure/repository.structure';
import {
  createAdsBodyParams,
  createAdsParams,
} from '../types/ads-params-types';

@Injectable()
export class AdsRepository implements IAdsRepository {
  constructor(private readonly prisma: PrismaService) {}
  async registerAds(
    param: createAdsParams,
    data: createAdsBodyParams,
  ): Promise<Advertisements> {
    const ads = await this.prisma.advertisements.create({
      data: {
        ...data,
        userId: param.id,
      },
    });
    await this.prisma.user.update({
      where: {
        id: param.id,
      },
      data: {
        ads: {
          push: [ads.id],
        },
      },
    });
    return ads;
  }
}
