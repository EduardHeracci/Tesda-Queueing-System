import { IsOptional } from 'class-validator';
import { Personnel } from 'src/personnel/entities/personnel.entity';
import { Qualification } from 'src/qualification/entities/qualification.entity';

export class CreateTraineeInfoDto {
  @IsOptional()
  firstName: string;

  @IsOptional()
  middleName: string;

  @IsOptional()
  lastName: string;

  @IsOptional()
  suffix: string;

  @IsOptional()
  address: string;

  @IsOptional()
  telephoneNumber: string;

  @IsOptional()
  dateOfBirth: string;

  @IsOptional()
  placeOfBirth: string;

  @IsOptional()
  civilStatus: string;

  @IsOptional()
  gender: string;

  @IsOptional()
  weight: string;

  @IsOptional()
  height: string;

  @IsOptional()
  distinguishingMarks: string;

  @IsOptional()
  spouseName: string;

  @IsOptional()
  motherName: string;

  @IsOptional()
  fatherName: string;

  @IsOptional()
  personnel: Personnel;

  @IsOptional()
  qualification: Qualification;
}
