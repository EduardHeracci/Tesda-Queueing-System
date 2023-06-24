import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QualificationService } from './qualification.service';
import { CreateQualificationDto } from './dto/create-qualification.dto';
import { UpdateQualificationDto } from './dto/update-qualification.dto';

@Controller('qualification')
export class QualificationController {
  constructor(private readonly qualificationService: QualificationService) {}

  @Post()
  async create(@Body() createQualificationDto: CreateQualificationDto) {
    return await this.qualificationService.create(createQualificationDto);
  }

  @Get()
  async findAll() {
    return await this.qualificationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.qualificationService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateQualificationDto: UpdateQualificationDto,
  ) {
    return await this.qualificationService.update(+id, updateQualificationDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.qualificationService.delete(+id);
  }
}
