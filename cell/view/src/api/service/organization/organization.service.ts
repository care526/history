import { BaseService, Params } from '../base';
import { Organization, Application, Member } from './organization.type';

class OrganizationService extends BaseService {
  HostPrefix = '/organization';

  list(user_id: number) {
    return this.post<Organization[]>('/list', { user_id });
  }

  create() {}

  edit(params: Params) {
    return this.post<Organization>('/edit', params);
  }

  info(organizationId: number) {
    return this.post<Organization>(`/info/${organizationId}`);
  }

  members(organizationId: number) {
    return this.post<Member[]>(`/members/${organizationId}`);
  }

  addMemberByAccount(params: Params) {
    return this.post<string>('/members/addByUserAccount', params);
  }

  applications(organizationId: number) {
    return this.post<Application[]>(`/applications/${organizationId}`);
  }
}

export const organizationService = new OrganizationService();
