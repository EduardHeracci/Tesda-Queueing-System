import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonnelService } from './personnel.service';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';

@Controller('personnel')
export class PersonnelController {
  constructor(private readonly personnelService: PersonnelService) {}

  @Post()
  async create(@Body() createPersonnelDto: CreatePersonnelDto) {
    return await this.personnelService.create(createPersonnelDto);
  }

  @Get()
  async findAll() {
    return await this.personnelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.personnelService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePersonnelDto: UpdatePersonnelDto,
  ) {
    return await this.personnelService.update(+id, updatePersonnelDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.personnelService.delete(+id);
  }
}
