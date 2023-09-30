import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'
import { LigasModule } from './ligas/ligas.module';
import { CommonModule } from './common/common.module';
import { JugadoresModule } from './jugadores/jugadores.module';
import { EquipoModule } from './equipo/equipo.module';
import { EstadisticaJugadorModule } from './estadistica-jugador/estadistica-jugador.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME
    }),
    LigasModule,
    CommonModule,
    JugadoresModule,
    EquipoModule,
    EstadisticaJugadorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
