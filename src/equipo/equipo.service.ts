import { Injectable, NotFoundException } from '@nestjs/common';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Equipo } from './entities/equipo.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose'; 
@Injectable()
export class EquipoService {
    
  constructor(

    @InjectModel( Equipo.name  )
    private readonly equipoModel: Model<Equipo>

  ){}

  findAll( paginationDto: PaginationDto ) {
  
      const { limite, desde } = paginationDto; 
  
      return this.equipoModel.find({"status":true})
              .populate('usuario', 'nombre aprellidoP apellidoM img')
              .populate('liga', 'nombre descripcion img')
              .limit( limite )
              .skip( desde )
  
    }
  
  findOne(id: string) {
      return this.equipoModel.findById(id)
            .populate('liga', 'nombre descripcion img')
            .populate('usuario', 'nombre aprellidoP apellidoM img');
    
  }
  
  findByLiga(ligaId: string) {

      return this.equipoModel.find({ liga: ligaId,"status":true })
              .populate('liga', 'nombre descripcion img')
              .populate('usuario', 'nombre aprellidoP apellidoM img');
  
  }
  
  
  
  
  

  

}
