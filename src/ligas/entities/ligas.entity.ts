import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document,Schema as MongooseSchema } from "mongoose";
import { Usuario } from './usuario.entity';

@Schema()
export class Liga extends Document {

    @Prop({ required:true })
    nombre: string;    
    
    @Prop({ required:true })
    descripcion: string;

    @Prop({ required:true })
    tipoCategoria: string; 

    @Prop({ required:true })
    tipoJuego: string;

    @Prop({ required:true })
    status: boolean;

    @Prop()
    img: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Usuario', required: true })
    usuario:  Usuario;
}

export const LigaSchema = SchemaFactory.createForClass( Liga );
