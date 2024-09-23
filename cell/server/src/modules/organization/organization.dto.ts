import { ApiProperty } from '@nestjs/swagger';

export class OrganizationDto {
  @ApiProperty()
  owner_id: number;

  @ApiProperty()
  name: string;
}

export class AddMemberDto {
  @ApiProperty()
  organization_id: number;

  @ApiProperty()
  user_id: number;
}

export class AddMemberByUserAccountDto {
  @ApiProperty()
  organization_id: number;

  @ApiProperty()
  account: string;
}
