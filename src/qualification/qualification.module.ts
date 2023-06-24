import { Module } from '@nestjs/common';
import { QualificationService } from './qualification.service';
import { QualificationController } from './qualification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Qualification } from './entities/qualification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Qualification])],
  controllers: [QualificationController],
  providers: [QualificationService],
})
export class QualificationModule {}
