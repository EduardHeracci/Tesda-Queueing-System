import { Test, TestingModule } from '@nestjs/testing';
import { TraineesInfoService } from './trainees-info.service';

describe('TraineesInfoService', () => {
  let service: TraineesInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TraineesInfoService],
    }).compile();

    service = module.get<TraineesInfoService>(TraineesInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
