import { Body, Controller, Post, UseGuards, Param } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { MemberService } from './member.service';
// import { ApplicationService } from './application.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@/guards';
import {
  OrganizationDto,
  AddMemberDto,
  AddMemberByUserAccountDto,
} from './organization.dto';
import { Organization } from '@/entities';

@ApiTags('organization')
@UseGuards(AuthGuard)
@Controller('organization')
export class OrganizationController {
  constructor(
    private organizationService: OrganizationService,
    private memberService: MemberService, // private applicationService: ApplicationService,
  ) {}

  // 创建组织
  @Post('create')
  create(@Body() organizationDto: OrganizationDto): Promise<Organization> {
    return this, this.organizationService.create(organizationDto);
  }

  // 编辑组织
  @Post('edit')
  edit(@Body() organizationDto: OrganizationDto): Promise<Organization> {
    return this, this.organizationService.edit(organizationDto);
  }

  // 组织列表
  @Post('list')
  list(@Body() { user_id }: { user_id: number }) {
    return this.organizationService.list(user_id);
  }

  // 组织信息
  @Post('info/:organizationId')
  info(
    @Param('organizationId')
    organizationId,
  ) {
    return this.organizationService.info(organizationId);
  }

  // 组织安装的应用
  // @Post('applications/:organizationId')
  // applications(
  //   @Param('organizationId')
  //   organizationId,
  // ) {
  //   return this.applicationService.list(organizationId);
  // }

  // 组织成员
  @Post('members/:organizationId')
  members(
    @Param('organizationId')
    organizationId,
  ) {
    return this.memberService.list(organizationId);
  }

  // 添加组织成员
  @Post('members/add')
  addMember(@Body() addMemberDto: AddMemberDto) {
    return this.memberService.add(addMemberDto);
  }

  // 通过账户添加成员
  @Post('members/addByUserAccount')
  addMemberByAccount(
    @Body() addMemberByUserAccountDto: AddMemberByUserAccountDto,
  ) {
    return this.memberService.addByUserAccount(addMemberByUserAccountDto);
  }
}
