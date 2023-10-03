import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Usuario } from '../../ligas/entities/usuario.entity';
import { Liga } from '../../ligas/entities/ligas.entity';
import { Equipo } from "src/equipo/entities/equipo.entity";
import { Document,Schema as MongooseSchema } from "mongoose";

@Schema()
export class Jugadores extends Document {

    
    @Prop({ required:true })
    nombre: string; 
    
    @Prop({ required:true })
    apellidoP:string;

    @Prop({ required:true })
    apellidoM:string;

    @Prop({ required:true })
    curp: string;

    @Prop({ required:true })
    img: string

    @Prop({ required:true })
    status: boolean

    @Prop({ required:true })
    edad: number


    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Usuario', required: true })
    usuario:  Usuario;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Liga', required: true })
    liga:  Liga;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Equipo', required: true })
    equipo:  Equipo;

}


export const jugadorSchema = SchemaFactory.createForClass( Jugadores );
