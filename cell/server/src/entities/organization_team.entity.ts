import { PrimaryColumn, Entity } from 'typeorm';

@Entity()
export class OrganizationTeam {
  @PrimaryColumn()
  organization_id: number;

  @PrimaryColumn()
  team_id: number;
}
