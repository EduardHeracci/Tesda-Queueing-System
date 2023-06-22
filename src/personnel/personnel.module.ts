import { Module } from '@nestjs/common';
import { PersonnelService } from './personnel.service';
import { PersonnelController } from './personnel.controller';

@Module({
  controllers: [PersonnelController],
  providers: [PersonnelService]
})
export class PersonnelModule {}
