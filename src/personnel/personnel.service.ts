import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Personnel } from './entities/personnel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonnelService {
  constructor(
    @InjectRepository(Personnel)
    private readonly personnelRepository: Repository<Personnel>,
  ) {}

  async create(createPersonnelDto: CreatePersonnelDto) {
    try {
      return await this.personnelRepository.save(createPersonnelDto);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findAll(): Promise<Personnel[]> {
    try {
      return await this.personnelRepository.find();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findOne(id: number): Promise<Personnel> {
    try {
      return await this.personnelRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: number, updatePersonnelDto: UpdatePersonnelDto) {
    try {
      return await this.personnelRepository.update(id, updatePersonnelDto);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async delete(id: number) {
    try {
      return await this.personnelRepository.delete(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
