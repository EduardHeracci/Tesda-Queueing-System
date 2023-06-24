import { Module } from '@nestjs/common';
import { TraineeInfoService } from './trainee-info.service';
import { TraineeInfoController } from './trainee-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraineeInfo } from './entities/trainee-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TraineeInfo])],
  controllers: [TraineeInfoController],
  providers: [TraineeInfoService],
})
export class TraineeInfoModule {}
