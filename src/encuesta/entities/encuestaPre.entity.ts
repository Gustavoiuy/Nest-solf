import { Prop, SchemaFactory,Schema } from '@nestjs/mongoose';
import { Document  } from 'mongoose';

@Schema( { collection: 'encuestaPre' } )
export class EncuestaPre extends Document {

    @Prop({ required: true })
    pregunta: string;

}

export const encuestaPreSchema = SchemaFactory.createForClass( EncuestaPre );