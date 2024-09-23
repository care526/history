import { BaseException } from '@/share/exceptions/baseException';

export class BaseHttpService {
  constructor() {}

  now() {
    return new Date();
    // return dayjs().format('YYYY-MM-DD HH:mm:ss');
  }

  createError(message: string) {
    return new BaseException(message);
  }
}
