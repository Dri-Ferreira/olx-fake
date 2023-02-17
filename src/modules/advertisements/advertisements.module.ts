import { Module } from '@nestjs/common';
import { AdvertisementsCreateService } from './services/advertisements-Create.service';
import { AdvertisementsController } from './advertisements.controller';
import { AdsRepository } from './repository/Ads.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [AdvertisementsController],
  providers: [AdvertisementsCreateService, AdsRepository, PrismaService],
})
export class AdvertisementsModule {}
