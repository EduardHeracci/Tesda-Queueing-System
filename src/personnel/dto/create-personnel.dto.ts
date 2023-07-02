import { IsOptional } from 'class-validator';

export class CreatePersonnelDto {
  @IsOptional()
  firstName: string;

  @IsOptional()
  middleName: string;

  @IsOptional()
  lastName: string;

  @IsOptional()
  userName: string;

  @IsOptional()
  password: string;

  @IsOptional()
  role: string;
}
