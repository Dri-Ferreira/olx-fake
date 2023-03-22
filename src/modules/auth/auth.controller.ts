import { AuthService } from './services/auth.service';
import { Controller, Inject, Post, Body } from '@nestjs/common';
import { LoginAuthDto } from './dto/login.auth-dto';

@Controller('auth')
export class AuthController {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.execute(loginAuthDto);
  }
}
