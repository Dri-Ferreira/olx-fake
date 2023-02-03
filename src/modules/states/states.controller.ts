import { Controller, Post, Body, Inject } from '@nestjs/common';
import { CreateStatesService } from './services/states.service';
import { CreateStateDto } from './dto/create-state.dto';

@Controller('states')
export class StatesController {
  constructor(
    @Inject(CreateStatesService)
    private readonly createStatesService: CreateStatesService,
  ) {}

  @Post('create')
  create(@Body() createStateDto: CreateStateDto) {
    return this.createStatesService.execute(createStateDto);
  }
}
