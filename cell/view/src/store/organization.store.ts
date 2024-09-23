import { atom } from 'recoil';
import { Organization } from '@api/service/organization';
import { toolUtil } from '@utils/tool.util';

const localOrganization = toolUtil.getLocalStorageObj('organization') as Organization;

export const organizationState = atom<Organization>({
  key: 'organizationState',
  default: {
    id: localOrganization.id,
    name: localOrganization.name,
    owner_id: localOrganization.owner_id,
  },
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet(newValue => {
        localStorage.setItem('organization', JSON.stringify(newValue));
      });
    },
  ],
});
