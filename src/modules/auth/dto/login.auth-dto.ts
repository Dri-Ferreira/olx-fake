import { IsEmail, IsString, MinLength } from 'class-validator';
import { ILoginParams } from '../types/login-params-types';

export class LoginAuthDto implements ILoginParams {
  passwaordHash: string;
  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(1)
  readonly password: string;
}
