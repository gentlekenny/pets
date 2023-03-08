import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('pets')
@ApiTags("pets")
export class PetsController {
  constructor(private readonly petsService: PetsService) { }

  @Post()
  async create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Get()
  async findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.petsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.update(id, updatePetDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.petsService.remove(id);
  }
}
