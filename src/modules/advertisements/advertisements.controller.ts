import { Controller, Post, Body } from '@nestjs/common';
import { AdvertisementsCreateService } from './services/advertisements-Create.service';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';

@Controller('advertisements')
export class AdvertisementsController {
  constructor(
    private readonly advertisementsService: AdvertisementsCreateService,
  ) {}

  @Post()
  create(@Body() createAdvertisementDto: CreateAdvertisementDto) {
    return this.advertisementsService.execute(createAdvertisementDto);
  }
}
