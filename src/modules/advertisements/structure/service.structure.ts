import { createAdsBodyParams } from './../types/ads-params-types';
import { Advertisements } from '@prisma/client';
import { createAdsParams } from '../types/ads-params-types';

export interface ICreateAdvertisementsService {
  execute(
    params: createAdsParams,
    data: createAdsBodyParams,
  ): Promise<Partial<Advertisements>>;
}
