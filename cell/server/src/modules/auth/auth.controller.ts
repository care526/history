import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { UserDto } from './user.dto';
import { User } from '@/entities';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@/guards';

@ApiTags('auth')
@UseGuards(AuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 登录
  @Post('/login')
  login(@Body() userDto: UserDto): Promise<{ user: User; token: string }> {
    return this.authService.login(userDto);
  }

  // 注册
  @Post('/register')
  register(@Body() userDto: UserDto): Promise<void> {
    return this.authService.register(userDto);
  }

  // 忘记密码
  @Post('/forgetPassword')
  forgetPassword() {}
}
