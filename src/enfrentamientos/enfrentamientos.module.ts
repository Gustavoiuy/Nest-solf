import { Module } from '@nestjs/common';
import { EnfrentamientosService } from './enfrentamientos.service';
import { EnfrentamientosController } from './enfrentamientos.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Enfrentamientos, EnfrentamientoSchema } from './entities/enfrentamiento.entity';
import { Estadios, EstadioSchema } from './entities/estadios.entity';

@Module({
  controllers: [EnfrentamientosController],
  providers: [EnfrentamientosService],
  imports:[
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Enfrentamientos.name,
        schema: EnfrentamientoSchema
      },
      {
        name: Estadios.name,
        schema: EstadioSchema
      }
    ])
]
})
export class EnfrentamientosModule {}
