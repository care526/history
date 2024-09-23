import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  account: string;

  @ApiProperty()
  password: string;
}
