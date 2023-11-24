import { Prop, SchemaFactory,Schema } from '@nestjs/mongoose';
import { Document  } from 'mongoose';

@Schema()
export class Encuesta extends Document {

    @Prop({ required: true })
    pregunta: string;

}

export const encuestaSchema = SchemaFactory.createForClass( Encuesta );