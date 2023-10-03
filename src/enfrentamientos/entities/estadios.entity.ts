import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document,Schema as MongooseSchema } from "mongoose";


export class Estadios extends Document  {

    @Prop({ required: true })
    nombre:string

    @Prop({ required: true })
    direccion:string

    img: string
}

export const EstadioSchema = SchemaFactory.createForClass( Estadios );