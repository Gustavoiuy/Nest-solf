import { Prop, SchemaFactory,Schema } from '@nestjs/mongoose';
import { Document,Schema as MongooseSchema } from "mongoose";
@Schema()
export class EncuestaRes extends Document {

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Encuesta' })
    preguntaId: string;

    @Prop({ required: true })
    respuesta: string;

}

export const encuestaResSchema = SchemaFactory.createForClass( EncuestaRes );