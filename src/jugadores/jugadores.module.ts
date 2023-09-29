import { Jugador, jugadorSchema } from './entities/jugadore.entity';
import { Module } from '@nestjs/common';
import { JugadoresService } from './jugadores.service';
import { JugadoresController } from './jugadores.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Liga, LigaSchema } from 'src/ligas/entities/ligas.entity';
import { Equipo, EquipoSchema } from 'src/equipo/entities/equipo.entity';
import { Usuario, UsuarioSchema } from 'src/ligas/entities/usuario.entity';

@Module({
  controllers: [JugadoresController],
  providers: [JugadoresService],
  imports:[
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
     
      {
        name: Liga.name,
        schema: LigaSchema
      },
      {
        name: Equipo.name,
        schema: EquipoSchema
      },
      {
        name: Jugador.name,
        schema: jugadorSchema
      },
      {
        name: Usuario.name,
        schema: UsuarioSchema
      },
    ]),
  ]
})
export class JugadoresModule {}
