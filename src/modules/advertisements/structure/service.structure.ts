import { createAdsBodyParams } from './../types/ads-params-types';
import { Advertisements } from '@prisma/client';

export interface ICreateAdvertisementsService {
  execute(data: createAdsBodyParams): Promise<Partial<Advertisements>>;
}
