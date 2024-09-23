import { BaseService, Params } from '../base';
import { UserAndToken, User } from './auth.type';

class AuthService extends BaseService {
  HostPrefix = '/auth';

  login(params: Params) {
    return this.post<UserAndToken>('/login', params);
  }

  register(params: Params) {
    return this.post<void>('/register', params);
  }
}

export const authService = new AuthService();
