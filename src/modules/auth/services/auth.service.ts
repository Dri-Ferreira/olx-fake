import { Inject, Injectable, ForbiddenException } from '@nestjs/common';
import { AuthRepository } from '../repository/auth.repository';
import { IAuthRepository } from '../structure/repository.strucuture';
import { ILoginService } from '../structure/service.structure';
import { ILoginParams, ILoginResponse } from '../types/login-params-types';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { decode } from 'punycode';

@Injectable()
export class AuthService implements ILoginService {
  constructor(
    @Inject(AuthRepository) private readonly authRepository: IAuthRepository,
  ) {}
  async execute(params: ILoginParams): Promise<ILoginResponse> {
    const existsUser = await this.authRepository.existsUser({
      email: params.email,
    });

    if (!existsUser)
      throw new ForbiddenException('email and password invalid!');
    const verifyPassword = await bcrypt.compare(
      params.password,
      existsUser.passwordHash,
    );

    if (!verifyPassword)
      throw new ForbiddenException('email and password invalid!');

    const privatekey = process.env.JWT_SECRET;
    const token = jwt.sign(
      {
        id: existsUser.id,
        name: existsUser.name,
      },
      privatekey,
      {
        expiresIn: '30m',
      },
    );
    return { token };
  }
}
