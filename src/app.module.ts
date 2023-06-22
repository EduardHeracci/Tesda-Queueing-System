import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QualificationModule } from './qualification/qualification.module';
import { TraineesInfoModule } from './trainees-info/trainees-info.module';
import { PersonnelModule } from './personnel/personnel.module';

@Module({
  imports: [QualificationModule, TraineesInfoModule, PersonnelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
