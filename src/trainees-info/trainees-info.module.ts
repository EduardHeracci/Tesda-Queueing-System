import { Module } from '@nestjs/common';
import { TraineesInfoService } from './trainees-info.service';
import { TraineesInfoController } from './trainees-info.controller';

@Module({
  controllers: [TraineesInfoController],
  providers: [TraineesInfoService]
})
export class TraineesInfoModule {}
