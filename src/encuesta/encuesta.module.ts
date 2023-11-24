import { Module } from '@nestjs/common';
import { EncuestaService } from './encuesta.service';
import { EncuestaController } from './encuesta.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Encuesta, encuestaSchema } from './entities/encuesta.entity';
import { EncuestaRes, encuestaResSchema } from './entities/encuestaRes.entity';

@Module({
  imports:[
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Encuesta.name,
        schema: encuestaSchema
      },
      {
        name: EncuestaRes.name,
        schema: encuestaResSchema
      },
    ])
  ],
  controllers: [EncuestaController],
  providers: [EncuestaService],
})
export class EncuestaModule {}
