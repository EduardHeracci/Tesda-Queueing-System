import { Injectable } from '@nestjs/common';
import { CreateTraineesInfoDto } from './dto/create-trainees-info.dto';
import { UpdateTraineesInfoDto } from './dto/update-trainees-info.dto';

@Injectable()
export class TraineesInfoService {
  create(createTraineesInfoDto: CreateTraineesInfoDto) {
    return 'This action adds a new traineesInfo';
  }

  findAll() {
    return `This action returns all traineesInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} traineesInfo`;
  }

  update(id: number, updateTraineesInfoDto: UpdateTraineesInfoDto) {
    return `This action updates a #${id} traineesInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} traineesInfo`;
  }
}
