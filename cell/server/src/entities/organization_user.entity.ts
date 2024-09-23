import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class OrganizationUser {
  @PrimaryColumn()
  organization_id: number;

  @PrimaryColumn()
  user_id: number;
}
