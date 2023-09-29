import { Injectable } from '@nestjs/common';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Equipo } from './entities/equipo.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

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

  findOne(id: number) {
    return `This action returns a #${id} equipo`;
  }

  

}
