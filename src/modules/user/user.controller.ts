import { Controller, Post, Body, Get, Inject } from '@nestjs/common';
import { CreateUserService } from './services/CreateUser.service';
import { CreateUserDto } from './dto/create-user.dto';
import { GetStatesAllService } from './services/GetStatesAll.service';

@Controller('user')
export class UserController {
  constructor(
    @Inject(CreateUserService)
    private readonly createUserService: CreateUserService,
    @Inject(GetStatesAllService)
    private readonly getStatesService: GetStatesAllService
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.execute(createUserDto);
  }

  @Get('teste')
  getAllStates() {
    return this.getStatesService.execute();
  }
}
