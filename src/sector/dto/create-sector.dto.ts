import { IsOptional } from 'class-validator';
import { Qualification } from 'src/qualification/entities/qualification.entity';

export class CreateSectorDto {
  @IsOptional()
  name: string;

  @IsOptional()
  qualification: Qualification;
}
