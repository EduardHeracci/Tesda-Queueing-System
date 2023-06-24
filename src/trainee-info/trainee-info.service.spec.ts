import { Test, TestingModule } from '@nestjs/testing';
import { TraineeInfoService } from './trainee-info.service';

describe('TraineeInfoService', () => {
  let service: TraineeInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TraineeInfoService],
    }).compile();

    service = module.get<TraineeInfoService>(TraineeInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
