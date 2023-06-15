import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from "bcrypt"

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {

  }

  async create(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);

    // Hashing password
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(newUser.password, saltRounds)
    newUser.password = hashedPassword

    // Saving user to database
    return await newUser.save()
  }

  async findAll() {
    return await this.userModel.find({})
  }

  async findOne(email: string) {
    return await this.userModel.findOne({ email: email })
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto)
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id)
  }
}
