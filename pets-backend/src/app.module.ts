import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsModule } from './modules/pets/pets.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DB),
    PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
