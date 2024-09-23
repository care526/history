import { atom } from 'recoil';
import { User } from '@api/service/auth';
import { toolUtil } from '@utils/tool.util';

const localUser = toolUtil.getLocalStorageObj('user') as User;

export const userState = atom<User>({
  key: 'userState',
  default: {
    id: localUser.id || 0,
    name: localUser.name || '',
  },
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet(newValue => {
        localStorage.setItem('user', JSON.stringify(newValue));
      });
    },
  ],
});
