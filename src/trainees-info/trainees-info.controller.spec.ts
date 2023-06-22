import { Test, TestingModule } from '@nestjs/testing';
import { TraineesInfoController } from './trainees-info.controller';
import { TraineesInfoService } from './trainees-info.service';

describe('TraineesInfoController', () => {
  let controller: TraineesInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TraineesInfoController],
      providers: [TraineesInfoService],
    }).compile();

    controller = module.get<TraineesInfoController>(TraineesInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
