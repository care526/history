import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, Organization, OrganizationUser } from '@/entities/index';
import { AddMemberDto, AddMemberByUserAccountDto } from './organization.dto';
import { BaseHttpService } from '@/share/services/baseHttp.service';

@Injectable()
export class MemberService extends BaseHttpService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
    @InjectRepository(OrganizationUser)
    private readonly organizationUserRepository: Repository<OrganizationUser>,
  ) {
    super();
  }

  async list(organizationId: number) {
    const users = await this.organizationUserRepository.find({
      where: {
        organization_id: organizationId,
      },
    });

    if (!users.length) return [];

    return this.userRepository.find({
      where: users.map((i) => ({ id: i.user_id })),
    });
  }

  async add(addMemberDto: AddMemberDto) {
    const organizationUser = new OrganizationUser();
    const { organization_id, user_id } = addMemberDto;
    organizationUser.organization_id = organization_id;
    organizationUser.user_id = user_id;

    await this.organizationUserRepository.save(addMemberDto);
    return '添加成功';
  }

  async addByUserAccount(addMemberByUserAccountDto: AddMemberByUserAccountDto) {
    const { account, organization_id } = addMemberByUserAccountDto;
    const user = await this.userRepository.findOne({
      where: { account },
    });
    if (!user) throw this.createError('该账户不存在');

    const member = await this.organizationUserRepository.findOne({
      where: [{ user_id: user.id }, { organization_id }],
    });
    if (member) throw this.createError('该成员已是组织成员');

    await this.organizationUserRepository.save({
      user_id: user.id,
      organization_id,
    });
    return '添加成功';
  }
}
