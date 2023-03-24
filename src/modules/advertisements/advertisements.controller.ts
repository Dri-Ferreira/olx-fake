import { Controller, Post, Body, Param, Inject } from '@nestjs/common';
import { AdvertisementsCreateService } from './services/advertisements-Create.service';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { ICreateAdvertisementsService } from './structure/service.structure';

@Controller('advertisements')
export class AdvertisementsController {
  constructor(
    @Inject(AdvertisementsCreateService)
    private readonly advertisementsService: ICreateAdvertisementsService,
  ) {}

  @Post('createAnuncio')
  create(@Body() data: CreateAdvertisementDto) {
    return this.advertisementsService.execute({ ...data });
  }
}
