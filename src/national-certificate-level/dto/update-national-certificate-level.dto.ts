import { PartialType } from '@nestjs/mapped-types';
import { CreateNationalCertificateLevelDto } from './create-national-certificate-level.dto';

export class UpdateNationalCertificateLevelDto extends PartialType(CreateNationalCertificateLevelDto) {}
