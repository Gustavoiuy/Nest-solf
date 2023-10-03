import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import { Usuario } from "src/ligas/entities/usuario.entity";
import { Liga } from "src/ligas/entities/ligas.entity";
import { Document,Schema as MongooseSchema } from "mongoose";

@Schema()
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
    usuario:  Usuario;

    
    @Prop({ required:true })
    status:boolean

   
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Liga', required: true })
    liga:  Liga;

}
export const equipoSchema = SchemaFactory.createForClass( Equipo );
