import { createAdsBodyParams } from '../types/ads-params-types';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateAdvertisementDto implements createAdsBodyParams {
  @IsString()
  user: string;

  @IsString()
  state: string;

  @IsString()
  category: string;

  @IsString()
  images: string;

  @IsString()
  title: string;

  @IsString()
  price: string;

  @IsBoolean()
  priceNegotiable: boolean;

  @IsString()
  description: string;

  @IsString()
  views: string;

  @IsString()
  status: string;
}
