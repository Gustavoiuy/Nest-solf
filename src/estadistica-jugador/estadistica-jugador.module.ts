import { Module } from '@nestjs/common';
import { EstadisticaJugadorService } from './estadistica-jugador.service';
import { EstadisticaJugadorController } from './estadistica-jugador.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { estadisticaJugadorSchema, estadisticasJugadores } from './entities/estadistica-jugador.entity';

@Module({
  controllers: [EstadisticaJugadorController],
  providers: [EstadisticaJugadorService],
  imports:
  [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: estadisticasJugadores.name,
        schema: estadisticaJugadorSchema
      }
    ]),
  ]
})
export class EstadisticaJugadorModule {}
