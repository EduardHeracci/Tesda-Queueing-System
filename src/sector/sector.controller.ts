import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SectorService } from './sector.service';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';

@Controller('sector')
export class SectorController {
  constructor(private readonly sectorService: SectorService) {}

  @Post()
  async create(@Body() createSectorDto: CreateSectorDto) {
    return await this.sectorService.create(createSectorDto);
  }

  @Get()
  async findAll() {
    return await this.sectorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sectorService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSectorDto: UpdateSectorDto,
  ) {
    return await this.sectorService.update(+id, updateSectorDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.sectorService.delete(+id);
  }
}
