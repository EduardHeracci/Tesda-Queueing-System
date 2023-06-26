import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateQualificationDto } from './dto/create-qualification.dto';
import { UpdateQualificationDto } from './dto/update-qualification.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Qualification } from './entities/qualification.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QualificationService {
  constructor(
    @InjectRepository(Qualification)
    private readonly qualificationRepository: Repository<Qualification>,
  ) {}

  async create(createQualificationDto: CreateQualificationDto) {
    try {
      return await this.qualificationRepository.save(createQualificationDto);
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  async findAll(): Promise<Qualification[]> {
    try {
      return await this.qualificationRepository.find({
        relations: ['nationalCertificateLevel'],
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findOne(id: number): Promise<Qualification> {
    try {
      return await this.qualificationRepository.findOneOrFail({
        where: { id },
        relations: ['nationalCertificateLevel'],
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: number, updateQualificationDto: UpdateQualificationDto) {
    try {
      return await this.qualificationRepository.update(
        id,
        updateQualificationDto,
      );
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  async delete(id: number) {
    try {
      return await this.qualificationRepository.delete(id);
    } catch (error) {
      throw new BadGatewayException();
    }
  }
}
