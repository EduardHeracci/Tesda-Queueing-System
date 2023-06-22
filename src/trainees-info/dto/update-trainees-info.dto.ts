import { PartialType } from '@nestjs/mapped-types';
import { CreateTraineesInfoDto } from './create-trainees-info.dto';

export class UpdateTraineesInfoDto extends PartialType(CreateTraineesInfoDto) {}
