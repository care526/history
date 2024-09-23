// nestjs
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// other packages
import { Repository } from 'typeorm';
// share
import { BaseHttpService } from '@/share/services/baseHttp.service';
// controller
// services
import { TokenService } from './token.service';
import { OrganizationService, MemberService } from '@/modules/organization';
// entities
import { User } from '@/entities';
// dtos
import { UserDto } from './user.dto';

@Injectable()
export class AuthService extends BaseHttpService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly tokenService: TokenService,
    private readonly organizationService: OrganizationService,
    private readonly memberService: MemberService,
  ) {
    super();
  }

  async login(userDto: UserDto): Promise<{ user: User; token: string }> {
    const user = await this.userRepository.findOne({
      select: ['id', 'name'],
      where: {
        account: userDto.account,
        password: userDto.password,
      },
    });
    if (user)
      return {
        user,
        token: this.tokenService.createToken(userDto),
      };

    throw this.createError('未找到该账户');
  }

  async register(userDto: UserDto): Promise<void> {
    const count = await this.userRepository.count({
      where: {
        account: userDto.account,
      },
    });
    if (count) throw this.createError('该用户已存在');

    const newUser = new User();
    newUser.account = userDto.account;
    newUser.password = userDto.password;
    newUser.name = '新用户';
    newUser.register_time = this.now();

    // 创建用户
    const user = await this.userRepository.save(newUser);
    // 创建组织
    const organization = await this.organizationService.create({
      owner_id: user.id,
      name: user.name + '的组织',
    });
    // 添加组织和用户的关联关系
    await this.memberService.add({
      organization_id: organization.id,
      user_id: user.id,
    });

    return;
  }
}
