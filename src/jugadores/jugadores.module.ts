import { Jugadores, jugadorSchema } from './entities/jugadores.entity';
import { Module } from '@nestjs/common';
import { JugadoresService } from './jugadores.service';
import { JugadoresController } from './jugadores.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Liga, LigaSchema } from 'src/ligas/entities/ligas.entity';
import { Equipo, equipoSchema } from 'src/equipo/entities/equipo.entity';
import { Usuario, UsuarioSchema } from 'src/ligas/entities/usuario.entity';
import { LigasModule } from 'src/ligas/ligas.module';
import { EquipoModule } from 'src/equipo/equipo.module';

@Module({
  controllers: [JugadoresController],
  providers: [JugadoresService],
  imports:[
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Jugadores.name,
        schema: jugadorSchema
      }
    ]),
    LigasModule,
    EquipoModule
  ]
})
export class JugadoresModule {}
