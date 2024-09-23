import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from './user.dto';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  createToken(userDto: UserDto) {
    const expiration = 60 * 60;
    return this.jwtService.sign(userDto, { expiresIn: expiration });
  }
}
