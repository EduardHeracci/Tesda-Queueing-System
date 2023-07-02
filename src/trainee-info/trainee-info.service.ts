import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTraineeInfoDto } from './dto/create-trainee-info.dto';
import { UpdateTraineeInfoDto } from './dto/update-trainee-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TraineeInfo } from './entities/trainee-info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TraineeInfoService {
  constructor(
    @InjectRepository(TraineeInfo)
    private readonly traineeInfoRepository: Repository<TraineeInfo>,
  ) {}

  async create(createTraineeInfoDto: CreateTraineeInfoDto) {
    try {
      return await this.traineeInfoRepository.save(createTraineeInfoDto);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findAll(): Promise<TraineeInfo[]> {
    try {
      return await this.traineeInfoRepository.find({
        relations: [
          'personnel',
          'qualification.nationalCertificateLevel',
          'qualification.sector',
        ],
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findOne(id: number): Promise<TraineeInfo> {
    try {
      return await this.traineeInfoRepository.findOneOrFail({
        where: { id },
        relations: [
          'personnel',
          'qualification.nationalCertificateLevel',
          'qualification.sector',
        ],
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: number, updateTraineeInfoDto: UpdateTraineeInfoDto) {
    try {
      return await this.traineeInfoRepository.update(id, updateTraineeInfoDto);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async delete(id: number) {
    try {
      return await this.traineeInfoRepository.delete(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
