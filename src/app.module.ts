import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonnelModule } from './personnel/personnel.module';
import { QualificationModule } from './qualification/qualification.module';
import { TraineeInfoModule } from './trainee-info/trainee-info.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from './configuration/database.configuration';
import { NationalCertificateLevelModule } from './national-certificate-level/national-certificate-level.module';
import { SectorModule } from './sector/sector.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: DatabaseConfiguration }),
    PersonnelModule,
    QualificationModule,
    TraineeInfoModule,
    NationalCertificateLevelModule,
    SectorModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
