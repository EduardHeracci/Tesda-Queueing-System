import { IsOptional } from 'class-validator';

export class CreateSectorDto {
  @IsOptional()
  name: string;
}
