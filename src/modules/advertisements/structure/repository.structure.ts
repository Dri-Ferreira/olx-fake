import { Advertisements, User } from '@prisma/client';
import {
  createAdsBodyParams,
  createAdsParams,
} from '../types/ads-params-types';

export interface IAdsRepository {
  registerAds(
    param: createAdsParams,
    data: createAdsBodyParams,
  ): Promise<Advertisements>;

  existAccount(where: Partial<User> | any): Promise<User>;
}
