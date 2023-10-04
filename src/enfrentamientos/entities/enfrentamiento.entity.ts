import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Usuario } from "src/ligas/entities/usuario.entity";
import { Liga } from "src/ligas/entities/ligas.entity";
import { Document,Schema as MongooseSchema } from "mongoose";
import { Jugadores } from "src/jugadores/entities/jugadores.entity";
import { Equipo } from "src/equipo/entities/equipo.entity";
import { Estadio } from "./estadios.entity";

export class CambioJugador extends Document {
     
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Jugadores', required: true })
    jugadorEntra: MongooseSchema.Types.ObjectId | Jugadores;
       
     @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Jugadores', required: true })
     jugadorSale: MongooseSchema.Types.ObjectId | Jugadores;

}

export class EstadisticasJugador extends Document {
     @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Jugadores', required: true })
     jugador: MongooseSchema.Types.ObjectId | Jugadores;

     @Prop({ default:0 })
     faltas:number

    @Prop({ default:0 })
    goles:number
    
    @Prop({ default:false })
    expulsado:boolean

    cambios: [CambioJugador]

    }
    export class EstadisticasEnfrentamiento extends Document {

         @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Enfrentamiento', required: true })
         enfrentamiento: MongooseSchema.Types.ObjectId | Enfrentamiento;
        
        
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

    export class  Enfrentamiento extends Document {

        @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Liga', required: true })
        liga: MongooseSchema.Types.ObjectId | Liga;
    
        jornada: number

         @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Equipo', required: true })
         equipoLocal:MongooseSchema.Types.ObjectId | Equipo;
        
        @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Equipo', required: true })
        equipoVisitante:MongooseSchema.Types.ObjectId | Equipo;

        fechaDeGeneracion: Date

        @Prop({ default:0 })
        esActual:boolean
    
        fechaDeEnfrentamiento:Date
        
        @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Estadio', required: true })
        estadio:MongooseSchema.Types.ObjectId | Estadio;
    
        estadisticas: EstadisticasEnfrentamiento
        
    }

    export const EstadisticasJugadorSchema = SchemaFactory.createForClass( EstadisticasJugador );

    export const CambioJugadorSchema = SchemaFactory.createForClass( CambioJugador );

    export const EnfrentamientoSchema = SchemaFactory.createForClass( Enfrentamiento );

    export const EstadisticasEnfrentamientoSchema = SchemaFactory.createForClass( EstadisticasEnfrentamiento );


