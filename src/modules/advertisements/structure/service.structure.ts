import { createAdsParams } from '../types/ads-params-types';

export interface ICreateAdvertisementsService {
  execute(params: createAdsParams): Promise<any>;
}
