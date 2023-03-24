import { Advertisements } from '@prisma/client';
import { createAdsBodyParams } from '../types/ads-params-types';

export interface IAdsRepository {
  registerAds(data: createAdsBodyParams): Promise<Advertisements>;
}
