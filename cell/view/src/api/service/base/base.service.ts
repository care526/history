import { APIURL } from '@config/api';
import { Fetch } from '../../interceptor';
import { Params } from './base.type';

export class BaseService {
  BaseServiceUrl = APIURL;
  HostPrefix = '';

  post<T>(url: string, data?: Params) {
    return Fetch.post<null, T>(this.BaseServiceUrl + this.HostPrefix + url, data);
  }
}
