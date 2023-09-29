import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Liga } from './entities/ligas.entity';
import { Model } from 'mongoose';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class LigasService {

  constructor(

    @InjectModel( Liga.name  )
    private readonly ligaModel: Model<Liga>

  ){}

  findAll( paginationDto: PaginationDto ) {
    
    const { limite, desde } = paginationDto; 

    return this.ligaModel.find({"status":true})
            .populate('usuario', 'nombre aprellidoP apellidoM img')        
            .limit( limite )
            .skip( desde )

  }

  findOne(id: string) {
    return this.ligaModel.findById(id)
          .populate('usuario', 'nombre aprellidoP apellidoM img')        
  }
}
