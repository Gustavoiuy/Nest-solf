import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Usuario } from "src/ligas/entities/usuario.entity";
import { Liga } from "src/ligas/entities/ligas.entity";
import { Document,Schema as MongooseSchema } from "mongoose";
import { Jugadores } from "src/jugadores/entities/jugadores.entity";
import { Equipo } from "src/equipo/entities/equipo.entity";


export class Estadio extends Document  {

    nombre:string

    direccion:string

    img: string
}

export const EstadioSchema = SchemaFactory.createForClass( Estadio );