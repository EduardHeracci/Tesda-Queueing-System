import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNationalCertificateLevelDto } from './dto/create-national-certificate-level.dto';
import { UpdateNationalCertificateLevelDto } from './dto/update-national-certificate-level.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NationalCertificateLevel } from './entities/national-certificate-level.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NationalCertificateLevelService {
  constructor(
    @InjectRepository(NationalCertificateLevel)
    private readonly nationalCertificateLevelRepository: Repository<NationalCertificateLevel>,
  ) {}
  async create(
    createNationalCertificateLevelDto: CreateNationalCertificateLevelDto,
  ) {
    try {
      return await this.nationalCertificateLevelRepository.save(
        createNationalCertificateLevelDto,
      );
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findAll(): Promise<NationalCertificateLevel[]> {
    try {
      return await this.nationalCertificateLevelRepository.find();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findOne(id: number): Promise<NationalCertificateLevel> {
    try {
      return await this.nationalCertificateLevelRepository.findOneOrFail({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(
    id: number,
    updateNationalCertificateLevelDto: UpdateNationalCertificateLevelDto,
  ) {
    try {
      return await this.nationalCertificateLevelRepository.update(
        id,
        updateNationalCertificateLevelDto,
      );
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async delete(id: number) {
    try {
      return await this.nationalCertificateLevelRepository.delete(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
