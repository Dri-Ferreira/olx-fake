import {
  HttpException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    try {
      const exist = await this.adsRepository.existAccount({
        id: param.id,
      });
      if (!exist) throw new NotFoundException('User account is not found');
      return await this.adsRepository.registerAds(param, data);
    } catch (error) {
      throw new HttpException(error.response, error.response.statusCode);
    }
  }
}
