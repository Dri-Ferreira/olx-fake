import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { AdvertisementsModule } from './modules/advertisements/advertisements.module';

@Module({
  imports: [UserModule, AdvertisementsModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
