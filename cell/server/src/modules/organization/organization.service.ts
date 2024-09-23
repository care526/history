import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrganizationDto } from './organization.dto';
import { Organization, OrganizationUser } from '@/entities/index';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
    @InjectRepository(OrganizationUser)
    private readonly organizationUserRepository: Repository<OrganizationUser>,
  ) {}

  create(organizationDto: OrganizationDto) {
    const organization = new Organization();
    organization.owner_id = organizationDto.owner_id;
    organization.name = organizationDto.name;

    return this.organizationRepository.save(organization);
  }

  edit(organizationDto: OrganizationDto) {
    return this.organizationRepository.save(organizationDto);
  }

  async list(user_id: number) {
    const organizationIds = await this.organizationUserRepository.find({
      where: {
        user_id,
      },
    });
    return this.organizationRepository.find({
      where: {
        owner_id: organizationIds.map((i) => i.user_id),
      },
    });
  }

  info(id: number) {
    return this.organizationRepository.findOne({
      where: {
        id,
      },
    });
  }
}
