import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { LigasService } from './ligas.service';
import { LigasController } from './ligas.controller';

import { Usuario, UsuarioSchema } from './entities/usuario.entity';
import { Liga, LigaSchema } from './entities/ligas.entity';


@Module({
  controllers: [LigasController],
  providers: [LigasService],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Usuario.name,
        schema: UsuarioSchema
      },
      {
        name: Liga.name,
        schema: LigaSchema
      }
    ]),
  ]
})
export class LigasModule {}
