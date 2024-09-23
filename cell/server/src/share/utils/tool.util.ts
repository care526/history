import { Injectable } from '@nestjs/common';
import { customAlphabet } from 'nanoid';

@Injectable()
export class ToolUtil {
  createUUIDFunc = customAlphabet('1234567890qwertyuiopasdfghjklzxcvbnm', 32);
  createUUID() {
    return this.createUUIDFunc();
  }
}
