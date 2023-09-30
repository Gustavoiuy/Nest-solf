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
                           
                .limit( limite )
                .skip( desde )
    
      }

 
  
  async findOne(id: string) {
    const equipo = await this.equipoModel.findById(id).exec();
    if (!equipo) {
      throw new NotFoundException(`No se encontró el equipo con ID: ${id}`);
    }
    return equipo;
  }
  
  async findByLiga(ligaId: string) {

    const objectIdLigaId = new Types.ObjectId(ligaId);
    const equipos = await this.equipoModel.find({ liga: objectIdLigaId });
    if (!equipos || equipos.length === 0) {
      throw new NotFoundException(`No se encontraron equipos para la liga con ID: ${ligaId}`);
    }
    return equipos;
  }
  
  
  
  
  

  

}
