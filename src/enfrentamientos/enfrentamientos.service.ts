import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Enfrentamiento } from './entities/enfrentamiento.entity';
import { Model, Types } from 'mongoose';

@Injectable()
export class EnfrentamientosService {
    constructor(

        @InjectModel( Enfrentamiento.name  )
        private readonly enfrentamientosModel: Model<Enfrentamiento>
    
      ){}

    async findByLiga(ligaId: string) {

        const objectIdLigaId = new Types.ObjectId(ligaId);
        const enfrentamientos = await this.enfrentamientosModel.find({ liga: objectIdLigaId });
        if (!enfrentamientos || enfrentamientos.length === 0) {
          throw new NotFoundException(`No se encontraron equipos para la liga con ID: ${ligaId}`);
        }
        return enfrentamientos;
      }

}
