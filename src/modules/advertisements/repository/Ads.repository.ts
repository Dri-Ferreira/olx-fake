import { Injectable } from '@nestjs/common';
import { Advertisements } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { IAdsRepository } from '../structure/repository.structure';
import { createAdsBodyParams } from '../types/ads-params-types';

@Injectable()
export class AdsRepository implements IAdsRepository {
  constructor(private readonly prisma: PrismaService) {}
  async registerAds(data: createAdsBodyParams): Promise<Advertisements> {
    const ads = await this.prisma.advertisements.create({
      data: {
        ...data,
      },
    });
    await this.prisma.user.update({
      where: {
        id: data.user,
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
