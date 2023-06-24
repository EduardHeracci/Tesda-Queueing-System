import { IsOptional } from 'class-validator';

export class CreateQualificationDto {
  @IsOptional()
  name: string;
}
