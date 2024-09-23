import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { MemberService } from './member.service';
// import { ApplicationService } from './application.service';
import {
  User,
  Organization,
  OrganizationUser,
  // Application,
  // ApplicationOrganization,
} from '@/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Organization,
      OrganizationUser,
      // Application,
      // ApplicationOrganization,
    ]),
  ],
  providers: [
    OrganizationService,
    MemberService,
    // ApplicationService
  ],
  controllers: [OrganizationController],
})
export class OrganizationModule {}
