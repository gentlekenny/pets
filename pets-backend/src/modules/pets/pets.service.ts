import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pets, PetsDocument } from './schemas/pets.schema';

@Injectable()
export class PetsService {

  constructor(@InjectModel(Pets.name) private petsModel: Model<PetsDocument>) {

  }

  async create(createPetDto: CreatePetDto) {
    const newPet = new this.petsModel(createPetDto);
    return await newPet.save()
  }

  async findAll() {
    return await this.petsModel.find({})
  }

  async findOne(id: string) {
    return await this.petsModel.findById(id)
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    return await this.petsModel.findByIdAndUpdate(id, updatePetDto)
  }

  async remove(id: string) {
    return await this.petsModel.findByIdAndDelete(id)
  }
}
