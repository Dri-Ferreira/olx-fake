import { createAdsParams } from '../types/ads-params-types';

export interface IAdsRepository {
  create(params: createAdsParams): Promise<any>;
}
