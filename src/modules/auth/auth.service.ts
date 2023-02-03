import { Inject, Injectable, ForbiddenException } from '@nestjs/common';
import { AuthRepository } from './repository/auth.repository';
import { IAuthRepository } from './structure/repository.strucuture';
import { ILoginService } from './structure/service.structure';
import { ILoginParams, ILoginResponse } from './types/login-params-types';

@Injectable()
export class AuthService implements ILoginService {
  constructor(
    @Inject(AuthRepository) private readonly authRepository: IAuthRepository,
  ) {}
  async execute(params: ILoginParams): Promise<ILoginResponse> {
    const existsUser = await this.authRepository.existsUser({
      email: params.email,
    });

    if (!existsUser) throw new ForbiddenException('User does not exist');
    return;
  }
}
