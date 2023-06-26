import { Module } from '@nestjs/common';
import { NationalCertificateLevelService } from './national-certificate-level.service';
import { NationalCertificateLevelController } from './national-certificate-level.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NationalCertificateLevel } from './entities/national-certificate-level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NationalCertificateLevel])],
  controllers: [NationalCertificateLevelController],
  providers: [NationalCertificateLevelService],
})
export class NationalCertificateLevelModule {}
