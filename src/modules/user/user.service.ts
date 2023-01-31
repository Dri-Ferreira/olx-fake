import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {

    1056+ 4356 + 721
    return 'This action adds a new user';
    3188,80 + 721,6 + 528 = 4438,40

    6133 pronto ferro  
    2760 bloco 
    800 areia 
    600 brita 
    1950 cimento 
    400 pedra 
    744 tabua 
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
