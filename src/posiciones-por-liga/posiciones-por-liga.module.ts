import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Posicion, PosicionSchema } from './entities/posiciones-por-liga.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{
       name: Posicion.name, schema: PosicionSchema 
      }
    ]),
  ],
})
export class PosicionesModule {}
