import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  owner_id: number;

  @Column()
  executor_ids: string;

  @Column()
  inspector_ids: string;

  @Column()
  owner_team_id: number;

  @Column()
  create_time: string;

  @Column()
  start_time: string;

  @Column()
  end_time: string;

  @Column()
  over_time: string;
}
