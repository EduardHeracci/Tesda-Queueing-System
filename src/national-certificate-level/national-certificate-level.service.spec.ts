import { Test, TestingModule } from '@nestjs/testing';
import { NationalCertificateLevelService } from './national-certificate-level.service';

describe('NationalCertificateLevelService', () => {
  let service: NationalCertificateLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NationalCertificateLevelService],
    }).compile();

    service = module.get<NationalCertificateLevelService>(NationalCertificateLevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
