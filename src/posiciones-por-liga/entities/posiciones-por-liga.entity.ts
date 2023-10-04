import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Posicion extends Document {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Liga', required: true, unique: true })
  liga: MongooseSchema.Types.ObjectId;

  @Prop({ type: Date, required: true })
  temporada: Date;

  @Prop({ type: Boolean, required: true })
  esActual: boolean;

  @Prop([
    {
      equipo: { type: MongooseSchema.Types.ObjectId, ref: 'Equipo', required: true },
      PJ: { type: Number, default: 0 },
      PG: { type: Number, default: 0 },
      PE: { type: Number, default: 0 },
      PP: { type: Number, default: 0 },
      GF: { type: Number, default: 0 },
      GC: { type: Number, default: 0 },
      Puntos: { type: Number },
      temporada: { type: Date, required: true },
      esActual: { type: Boolean, required: true },
    },
  ])
  posiciones: {
    equipo: MongooseSchema.Types.ObjectId;
    PJ: number;
    PG: number;
    PE: number;
    PP: number;
    GF: number;
    GC: number;
    Puntos?: number;
    temporada: Date;
    esActual: boolean;
  }[];

}

export const PosicionSchema = SchemaFactory.createForClass(Posicion);
