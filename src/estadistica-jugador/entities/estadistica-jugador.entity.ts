import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Liga } from '../../ligas/entities/ligas.entity';
import { Equipo } from "src/equipo/entities/equipo.entity";
import { Jugadores } from "src/jugadores/entities/jugadores.entity";
import { Document,Schema as MongooseSchema } from "mongoose";

@Schema()
export class estadisticasJugadores extends Document {

    @Prop({ default:0 })
    goles:number
    
    @Prop({ default:0 })
    faltas:number

    @Prop({ default:0 })
    expulsiones:number

    @Prop({ required:true })
    temporada:Date

    @Prop({ required:true })
    esActual:boolean

    
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Liga', required: true })
    jugador:  Jugadores;


    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Liga', required: true })
    liga:  Liga;

     @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Equipo', required: true })
     equipo:  Equipo;


    
}

export const estadisticaJugadoSchema = SchemaFactory.createForClass( estadisticasJugadores );
