import { IsOptional } from 'class-validator';

export class CreateNationalCertificateLevelDto {
  @IsOptional()
  name: string;
}
