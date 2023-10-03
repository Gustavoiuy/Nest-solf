import { Prop, SchemaFactory,Schema } from "@nestjs/mongoose";
import { Liga } from "src/ligas/entities/ligas.entity";
import { Document,Schema as MongooseSchema } from "mongoose";
import { Jugadores } from "src/jugadores/entities/jugadores.entity";
import { Equipo } from "src/equipo/entities/equipo.entity";
import { Estadio } from "./estadios.entity";

class CambioJugador extends Document {

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Jugadores', required: true })
    jugadorEntra:  Jugadores;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Jugadores', required: true })
    jugadorSale: Jugadores;

}

class EstadisticasJugador extends Document {
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Jugadores', required: true })
    jugador: Jugadores;

    @Prop({ default:0 })
    faltas:number

    @Prop({ default:0 })
    goles:number
    
    @Prop({ default:false })
    expulsado:boolean

    cambios: [CambioJugador]

}

@Schema()
export class Enfrentamientos extends Document {

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Liga', required: true })
    liga: Liga;

    @Prop({required: true })
    jornada: number

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Equipo', required: true })
    equipoLocal: Equipo;
    
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Equipo', required: true })
    equipoVisitante: Equipo;

    @Prop({required: true })
    fechaDeGeneracion: Date

    @Prop({ default:0 })
    esActual:boolean

    fechaDeEnfrentamiento:Date
    
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Estadio', required: true })
    estadio: Estadio;

    estadisticas: EstadisticasEnfrentamiento
    
}

class EstadisticasEnfrentamiento extends Document {

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Enfrentamiento', required: true })
    enfrentamiento: Enfrentamientos;
    
    
    @Prop({ default:0 })
    totalGolesLocal:number

    @Prop({ default:0 })
    totalAutogolesLocal: number


    @Prop({ default:0 })
    totalFaltasLocal:number

    @Prop({ default:0 })
    malUniformadosLocal: number

    @Prop({ default:0 })
    totalGolesVisitante: number

    @Prop({ default:0 })
    totalAutogolesVisitante: number

    @Prop({ default:0 })
    totalFaltasVisitante: number

    @Prop({ default:0 })
    malUniformadosVisitante: number
    
    estadisticasJugadores: [EstadisticasJugador] // Array de estadísticas de jugadores
    // Puedes agregar más campos de estadísticas generales del enfrentamiento aquí

}

export const EnfrentamientoSchema = SchemaFactory.createForClass( Enfrentamientos );


