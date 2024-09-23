import { PrimaryColumn, Entity } from 'typeorm';

@Entity()
export class TeamUser {
  @PrimaryColumn()
  team_id: number;

  @PrimaryColumn()
  user_id: number;
}
