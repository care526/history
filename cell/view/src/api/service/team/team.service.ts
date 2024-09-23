import { BaseService, Params } from '../base';
import { Team } from './team.type';

class TeamService extends BaseService {
  HostPrefix = '/team';

  add(params: Params) {
    return this.post<null>('add', params);
  }

  list() {
    return this.post<Team[]>('/list');
  }

  info(teamId: number) {
    return this.post<Team>(`/info/${teamId}`);
  }
}

export const teamService = new TeamService();
