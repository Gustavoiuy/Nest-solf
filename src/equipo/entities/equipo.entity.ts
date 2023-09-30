import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Usuario } from "src/ligas/entities/usuario.entity";
import { Liga } from "src/ligas/entities/ligas.entity";
import { Document,Schema as MongooseSchema } from "mongoose";


export class Equipo extends Document{
    @Prop({ required:true })
    nombre: string;

    @Prop({ required:true })
    descripcion: string;

    @Prop({ required:true })
    img: string;

    @Prop({ required:true })
    descanso: boolean;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Usuario', required: true })
    usuario: MongooseSchema.Types.ObjectId | Usuario;

    
    @Prop({ required:true })
    status:boolean

   
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Liga', required: true })
    liga: MongooseSchema.Types.ObjectId | Liga;

}
export const equipoSchema = SchemaFactory.createForClass( Equipo );
