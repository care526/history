import { BaseService, Params } from '../base';

class UserService extends BaseService {
  HostPrefix = '/user';

  create(params: Params) {
    return this.post('/create', params);
  }
}

export const userService = new UserService();
