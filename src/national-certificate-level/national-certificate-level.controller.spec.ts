import { Test, TestingModule } from '@nestjs/testing';
import { NationalCertificateLevelController } from './national-certificate-level.controller';
import { NationalCertificateLevelService } from './national-certificate-level.service';

describe('NationalCertificateLevelController', () => {
  let controller: NationalCertificateLevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NationalCertificateLevelController],
      providers: [NationalCertificateLevelService],
    }).compile();

    controller = module.get<NationalCertificateLevelController>(NationalCertificateLevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
