import { Inject, Injectable } from '@nestjs/common';
import { Advertisements } from '@prisma/client';
import { AdsRepository } from '../repository/Ads.repository';
import { IAdsRepository } from '../structure/repository.structure';
import {
  createAdsBodyParams,
  createAdsParams,
} from '../types/ads-params-types';

@Injectable()
export class AdvertisementsCreateService {
  constructor(
    @Inject(AdsRepository) private readonly adsRepository: IAdsRepository,
  ) {}
  async execute(
    param: createAdsParams,
    data: createAdsBodyParams,
  ): Promise<Advertisements> {
    return await this.adsRepository.registerAds(param, data);
  }
}
