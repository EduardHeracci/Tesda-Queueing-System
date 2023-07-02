import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sector } from './entities/sector.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(Sector)
    private readonly sectorRepository: Repository<Sector>,
  ) {}
  async create(createSectorDto: CreateSectorDto) {
    try {
      return await this.sectorRepository.save(createSectorDto);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findAll(): Promise<Sector[]> {
    try {
      return await this.sectorRepository.find({});
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findOne(id: number): Promise<Sector> {
    try {
      return await this.sectorRepository.findOneOrFail({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: number, updateSectorDto: UpdateSectorDto) {
    try {
      return await this.sectorRepository.update(id, updateSectorDto);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async delete(id: number) {
    try {
      return await this.sectorRepository.delete(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
