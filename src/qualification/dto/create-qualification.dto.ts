import { IsOptional } from 'class-validator';
import { NationalCertificateLevel } from 'src/national-certificate-level/entities/national-certificate-level.entity';

export class CreateQualificationDto {
  @IsOptional()
  name: string;

  @IsOptional()
  nationalCertificateLevel: NationalCertificateLevel;
}
