import { GetIdParams } from './types/user-params-types';
import {
  Controller,
  Post,
  Body,
  Get,
  Inject,
  UseGuards,
  Param,
} from '@nestjs/common';
import { CreateUserService } from './services/CreateUser.service';
import { CreateUserDto } from './dto/create-user.dto';
import { GetStatesAllService } from './services/GetStatesAll.service';
import { JwtAuthGuard } from 'src/middleware/jwt-auth.guard';
import { GetAllUsersService } from './services/GetAllUsers.service';
import { GetUserIdService } from './services/GetUserId.service';

@Controller('v1/user')
export class UserController {
  constructor(
    @Inject(CreateUserService)
    private readonly createUserService: CreateUserService,
    @Inject(GetStatesAllService)
    private readonly getStatesService: GetStatesAllService,
    @Inject(GetAllUsersService)
    private readonly getAllUsersService: GetAllUsersService,
    @Inject(GetUserIdService)
    private readonly getUserIdService: GetUserIdService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.execute(createUserDto);
  }

  @Get('search')
  getAllStates() {
    return this.getStatesService.execute();
  }

  //@UseGuards(JwtAuthGuard)
  @Get('searchAllUsers')
  getAllUsers() {
    return this.getAllUsersService.execute();
  }

  //@UseGuards(JwtAuthGuard)
  @Get('searchId/:id')
  getUserId(@Param() id: GetIdParams) {
    return this.getUserIdService.execute(id);
  }
}
