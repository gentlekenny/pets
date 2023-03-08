import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/modules/user/schemas/user.schema';

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

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    owner: User;
}

export const PetsSchema = SchemaFactory.createForClass(Pets);