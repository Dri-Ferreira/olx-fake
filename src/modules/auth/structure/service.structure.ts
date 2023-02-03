import { ILoginParams, ILoginResponse } from './../types/login-params-types';
export interface ILoginService {
  execute(params: ILoginParams): Promise<ILoginResponse>;
}
