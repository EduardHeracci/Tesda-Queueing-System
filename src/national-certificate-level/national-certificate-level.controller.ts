import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NationalCertificateLevelService } from './national-certificate-level.service';
import { CreateNationalCertificateLevelDto } from './dto/create-national-certificate-level.dto';
import { UpdateNationalCertificateLevelDto } from './dto/update-national-certificate-level.dto';

@Controller('national-certificate-level')
export class NationalCertificateLevelController {
  constructor(
    private readonly nationalCertificateLevelService: NationalCertificateLevelService,
  ) {}

  @Post()
  async create(
    @Body()
    createNationalCertificateLevelDto: CreateNationalCertificateLevelDto,
  ) {
    return await this.nationalCertificateLevelService.create(
      createNationalCertificateLevelDto,
    );
  }

  @Get()
  async findAll() {
    return await this.nationalCertificateLevelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.nationalCertificateLevelService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body()
    updateNationalCertificateLevelDto: UpdateNationalCertificateLevelDto,
  ) {
    return await this.nationalCertificateLevelService.update(
      +id,
      updateNationalCertificateLevelDto,
    );
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.nationalCertificateLevelService.delete(+id);
  }
}
