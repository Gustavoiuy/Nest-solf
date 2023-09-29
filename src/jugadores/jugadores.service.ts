import { Injectable, NotFoundException } from '@nestjs/common';

import { Jugador } from './entities/jugadore.entity';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
@Injectable()
export class JugadoresService {

    constructor(

        @InjectModel( Jugador.name  )
        private readonly jugadorModel: Model<Jugador>
    
      ){}

findAll( paginationDto: PaginationDto ) {
    
const { limite, desde } = paginationDto; 
    
return this.jugadorModel.find({"status":true})    
               .limit( limite )
               .skip( desde )
    
      }

  async findOne(term: string) {
    let jugador:Jugador;

    if(!isNaN(+term)){
        jugador = await this.jugadorModel.findOne({equipo:term});

    }

     //MongoID

     if(!jugador && isValidObjectId(term)){
        jugador = await this.jugadorModel.findById(term);
    }

    //name
    
    if(!jugador){

        jugador = await this.jugadorModel.findOne({name:term})
     }

     if( !jugador)
        throw new NotFoundException(`Jugador "${term}"no encontrado`)
     
   
    return jugador;

   
  }


}
