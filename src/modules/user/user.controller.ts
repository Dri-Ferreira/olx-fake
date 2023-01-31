import { Controller, Post, Body, Inject } from '@nestjs/common';
import { CreateUserService } from './services/CreateUser.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(
    @Inject(CreateUserService)
    private readonly createUserService: CreateUserService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.execute(createUserDto);
  }
}
