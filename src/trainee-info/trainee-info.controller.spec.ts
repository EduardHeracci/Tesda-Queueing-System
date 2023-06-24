import { Test, TestingModule } from '@nestjs/testing';
import { TraineeInfoController } from './trainee-info.controller';
import { TraineeInfoService } from './trainee-info.service';

describe('TraineeInfoController', () => {
  let controller: TraineeInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TraineeInfoController],
      providers: [TraineeInfoService],
    }).compile();

    controller = module.get<TraineeInfoController>(TraineeInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
