import { Posicion } from './entities/tabla-Posiciones.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TablaPosicionesService {
    constructor(

        @InjectModel( Posicion.name  )
        private readonly tablaPosicionModel: Model<Posicion>
    
      ){}

    getTablaPorLiga(ligaId: string) {

        return this.tablaPosicionModel.find({ liga: ligaId})
        
   
  }
  

 

}