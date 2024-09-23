import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Organization, OrganizationUser } from '@/entities';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { OrganizationService, MemberService } from '@/modules/organization';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Organization, OrganizationUser]),
    JwtModule.register({
      secret: 'json_web_token_secret_key',
    }),
  ],
  providers: [AuthService, TokenService, OrganizationService, MemberService],
  controllers: [AuthController],
})
export class AuthModule {}
