import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Enfrentamientos} from './entities/enfrentamiento.entity';
import { Model, Types } from 'mongoose';

@Injectable()
export class EnfrentamientosService {
    constructor(

        @InjectModel( Enfrentamientos.name  )
        private readonly enfrentamientosModel: Model<Enfrentamientos>
    
      ){}

    findByLiga(ligaId: string) {

        return this.enfrentamientosModel.find({ liga: ligaId, "esActual":true })
                .populate('liga', 'nombre')
                .populate('equipoLocal', 'nombre img')
                .populate('equipoVisitante', 'nombre img');
      }

      findByEquipo(equipoId: string){

        return this.enfrentamientosModel.find({ $or:[ {"equipoVisitante":equipoId} , {"equipoLocal":equipoId}], "esActual":true})
                  .populate('liga', 'nombre')
                  .populate('equipoLocal', 'nombre img')
                  .populate('equipoVisitante', 'nombre img');
      }

}
