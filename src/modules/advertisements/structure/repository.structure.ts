import { Advertisements } from '@prisma/client';
import {
  createAdsBodyParams,
  createAdsParams,
} from '../types/ads-params-types';

export interface IAdsRepository {
  registerAds(
    param: createAdsParams,
    data: createAdsBodyParams,
  ): Promise<Advertisements>;
}
