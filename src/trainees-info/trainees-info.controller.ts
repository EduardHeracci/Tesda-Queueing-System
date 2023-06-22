import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TraineesInfoService } from './trainees-info.service';
import { CreateTraineesInfoDto } from './dto/create-trainees-info.dto';
import { UpdateTraineesInfoDto } from './dto/update-trainees-info.dto';

@Controller('trainees-info')
export class TraineesInfoController {
  constructor(private readonly traineesInfoService: TraineesInfoService) {}

  @Post()
  create(@Body() createTraineesInfoDto: CreateTraineesInfoDto) {
    return this.traineesInfoService.create(createTraineesInfoDto);
  }

  @Get()
  findAll() {
    return this.traineesInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.traineesInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTraineesInfoDto: UpdateTraineesInfoDto) {
    return this.traineesInfoService.update(+id, updateTraineesInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.traineesInfoService.remove(+id);
  }
}
