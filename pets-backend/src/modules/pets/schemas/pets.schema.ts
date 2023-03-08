import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PetsDocument = HydratedDocument<Pets>;

@Schema()
export class Pets {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    type: string;

    @Prop()
    picture: string;

    @Prop({ default: [] })
    rates: [number]
}

export const PetsSchema = SchemaFactory.createForClass(Pets);