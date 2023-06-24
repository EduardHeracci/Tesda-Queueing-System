import { PartialType } from '@nestjs/mapped-types';
import { CreateTraineeInfoDto } from './create-trainee-info.dto';

export class UpdateTraineeInfoDto extends PartialType(CreateTraineeInfoDto) {}
