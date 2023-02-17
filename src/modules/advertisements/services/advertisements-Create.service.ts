import { Inject, Injectable } from '@nestjs/common';
import { AdsRepository } from '../repository/Ads.repository';
import { ICreateAdvertisementsService } from '../structure/service.structure';
import { createAdsParams } from '../types/ads-params-types';

@Injectable()
export class AdvertisementsCreateService
  implements ICreateAdvertisementsService
{
  constructor(
    @Inject(AdsRepository) private readonly adsRepository: AdsRepository,
  ) {}
  execute(params: createAdsParams): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
