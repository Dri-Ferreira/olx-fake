import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { AdvertisementsModule } from './modules/advertisements/advertisements.module';
import { StatesModule } from './modules/states/states.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    UserModule,
    AdvertisementsModule,
    CategoriesModule,
    StatesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
