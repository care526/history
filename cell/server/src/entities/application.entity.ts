import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  app_id: string;

  @Column()
  name: string;

  @Column()
  logo: string;
}
