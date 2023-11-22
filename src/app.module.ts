import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'
import { LigasModule } from './ligas/ligas.module';
import { CommonModule } from './common/common.module';
import { JugadoresModule } from './jugadores/jugadores.module';
import { EquipoModule } from './equipo/equipo.module';
import { EstadisticaJugadorModule } from './estadistica-jugador/estadistica-jugador.module';
import { EnfrentamientosModule } from './enfrentamientos/enfrentamientos.module';
import { TablaPosicionesModule } from './tabla-posiciones/tabla-posiciones.module';
import { MetricsModule } from './metrics/metrics.module';

import { AuthModule } from './auth/auth.module';

import { PaymentsModule } from './payments/payments.module';


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
    EnfrentamientosModule,
    TablaPosicionesModule,
    MetricsModule,

    AuthModule,
    PaymentsModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
