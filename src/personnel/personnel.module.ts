import { Module } from '@nestjs/common';
import { PersonnelService } from './personnel.service';
import { PersonnelController } from './personnel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personnel } from './entities/personnel.entity';
import { HashingResourcesService } from 'src/resources/hashing.resources.service';
import { BcryptResourcesService } from 'src/resources/bcrypt.resources.service';

@Module({
  imports: [TypeOrmModule.forFeature([Personnel])],
  controllers: [PersonnelController],
  providers: [
    {
      provide: HashingResourcesService,
      useClass: BcryptResourcesService,
    },
    PersonnelService,
  ],
})
export class PersonnelModule {}
