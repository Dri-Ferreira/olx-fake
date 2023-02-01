import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { AdvertisementsModule } from './modules/advertisements/advertisements.module';
import { StatesModule } from './modules/states/states.module';

@Module({
  imports: [UserModule, AdvertisementsModule, CategoriesModule, StatesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
