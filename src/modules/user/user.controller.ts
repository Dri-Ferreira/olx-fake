import { Controller, Post, Body, Get, Inject, UseGuards } from '@nestjs/common';
import { CreateUserService } from './services/CreateUser.service';
import { CreateUserDto } from './dto/create-user.dto';
import { GetStatesAllService } from './services/GetStatesAll.service';
import { JwtAuthGuard } from 'src/middleware/jwt-auth.guard';
import { GetAllUsersService } from './services/GetAllUsers.service';

@Controller('user')
export class UserController {
  constructor(
    @Inject(CreateUserService)
    private readonly createUserService: CreateUserService,
    @Inject(GetStatesAllService)
    private readonly getStatesService: GetStatesAllService,
    @Inject(GetAllUsersService)
    private readonly getAllUsersService: GetAllUsersService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.execute(createUserDto);
  }

  @Get('search')
  getAllStates() {
    return this.getStatesService.execute();
  }

  @UseGuards(JwtAuthGuard)
  @Get('userSearch')
  getAllUsers() {
    return this.getAllUsersService.execute();
  }
}
