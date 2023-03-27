import {
  createAdsBodyParams,
  createAdsParams,
} from './../types/ads-params-types';
import { Advertisements } from '@prisma/client';

export interface ICreateAdvertisementsService {
  execute(
    param: createAdsParams,
    data: createAdsBodyParams,
  ): Promise<Partial<Advertisements>>;
}
