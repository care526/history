import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Application, ApplicationOrganization } from '@/entities/index';

@Injectable()
export class ApplicationService {
  constructor() // @InjectRepository(Application)
  // private readonly application: Repository<Application>,
  // @InjectRepository(ApplicationOrganization)
  // private readonly applicationOrganization: Repository<ApplicationOrganization>,
  {}

  // async list(organizationId: number) {
  //   const apps = await this.applicationOrganization.find({
  //     where: {
  //       organization_id: organizationId,
  //     },
  //   });

  //   if (!apps.length) return [];

  //   return this.application.find({
  //     where: apps.map((i) => ({ app_id: i.app_id })),
  //   });
  // }
}
