import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Jugadores } from './entities/jugadores.entity';
import { Model } from 'mongoose';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
@Injectable()
export class JugadoresService {

    constructor(

        @InjectModel( Jugadores.name  )
        private readonly jugadorModel: Model<Jugadores>
    
      ){}

      getJugadoresPorEquipo( id: string ) {

        return this.jugadorModel.find({"equipo":id,"status":true})


      }



}
