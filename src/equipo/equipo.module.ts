import { Module } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { EquipoController } from './equipo.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Equipo, equipoSchema } from './entities/equipo.entity';
import { LigasModule } from 'src/ligas/ligas.module';
import { Liga, LigaSchema } from '../ligas/entities/ligas.entity';

@Module({
  controllers: [EquipoController],
  providers: [EquipoService],
  imports:[
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Equipo.name,
        schema: equipoSchema
      },
      {
        name: Liga.name,
        schema: LigaSchema
      },
    ]),
    LigasModule
  ]
})
export class EquipoModule {}
