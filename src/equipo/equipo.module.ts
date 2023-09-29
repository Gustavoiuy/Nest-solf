import { Module } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { EquipoController } from './equipo.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Equipo, EquipoSchema } from './entities/equipo.entity';
import { LigasModule } from 'src/ligas/ligas.module';

@Module({
  controllers: [EquipoController],
  providers: [EquipoService],
  imports:[
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Equipo.name,
        schema: EquipoSchema
      },
    ]),
    LigasModule
  ]
})
export class EquipoModule {}
