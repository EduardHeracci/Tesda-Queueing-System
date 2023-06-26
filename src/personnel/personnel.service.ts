import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Personnel } from './entities/personnel.entity';
import { Repository } from 'typeorm';
import { HashingResourcesService } from 'src/resources/hashing.resources.service';

@Injectable()
export class PersonnelService {
  constructor(
    @InjectRepository(Personnel)
    private readonly personnelRepository: Repository<Personnel>,
    private readonly hashingResourcesService: HashingResourcesService,
  ) {}

  async create(createPersonnelDto: CreatePersonnelDto) {
    const hashingThePassword = await this.hashingResourcesService.hash(
      createPersonnelDto.password,
    );
    const newUser = {
      ...createPersonnelDto,
      password: hashingThePassword,
    };
    const { userName, firstName, middleName, lastName } = createPersonnelDto;
    const existingRecord = await this.personnelRepository.findOne({
      where: [{ userName }, { firstName, middleName, lastName }],
    });
    if (existingRecord) {
      throw new ConflictException('Record already exists');
    }
    try {
      return await this.personnelRepository.save(newUser);
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
    const hashingThePassword = await this.hashingResourcesService.hash(
      updatePersonnelDto.password,
    );

    const updatedUser = {
      ...updatePersonnelDto,
      password: hashingThePassword,
    };
    const { userName, firstName, middleName, lastName } = updatePersonnelDto;
    const existingRecord = await this.personnelRepository.findOne({
      where: [{ userName }, { firstName, middleName, lastName }],
    });
    if (existingRecord) {
      throw new ConflictException('Record already exists');
    }
    try {
      return await this.personnelRepository.update(id, updatedUser);
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
