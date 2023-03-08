import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Pets } from 'src/modules/pets/schemas/pets.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    nickname: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pets' }] })
    pets: Pets[];
}

export const UserSchema = SchemaFactory.createForClass(User);