import { Module } from '@nestjs/common';
import { TablaPosicionesService } from './tabla-posiciones.service';
import { TablaPosicionesController } from './tabla-posiciones.controller';
import { Posicion, PosicionSchema } from './entities/tabla-Posiciones.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Liga, LigaSchema } from 'src/ligas/entities/ligas.entity';

@Module({
  controllers: [TablaPosicionesController],
  providers: [TablaPosicionesService],
  imports:[
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Posicion.name,
        schema: PosicionSchema
      },
      {
        name: Liga.name,
        schema: LigaSchema
      },
      
    ])
]
})
export class TablaPosicionesModule {}