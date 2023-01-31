import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './modules/user/user.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { AdvertisementsModule } from './modules/advertisements/advertisements.module';

@Module({
  imports: [UserModule, AdvertisementsModule, CategoriesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
