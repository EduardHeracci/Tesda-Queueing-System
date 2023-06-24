import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TraineeInfoService } from './trainee-info.service';
import { CreateTraineeInfoDto } from './dto/create-trainee-info.dto';
import { UpdateTraineeInfoDto } from './dto/update-trainee-info.dto';

@Controller('trainee-info')
export class TraineeInfoController {
  constructor(private readonly traineeInfoService: TraineeInfoService) {}

  @Post()
  async create(@Body() createTraineeInfoDto: CreateTraineeInfoDto) {
    return await this.traineeInfoService.create(createTraineeInfoDto);
  }

  @Get()
  async findAll() {
    return await this.traineeInfoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.traineeInfoService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTraineeInfoDto: UpdateTraineeInfoDto,
  ) {
    return await this.traineeInfoService.update(+id, updateTraineeInfoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.traineeInfoService.delete(+id);
  }
}
