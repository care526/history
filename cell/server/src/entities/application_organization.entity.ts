import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ApplicationOrganization {
  @PrimaryColumn()
  app_id: string;

  @PrimaryColumn()
  organization_id: string;
}
