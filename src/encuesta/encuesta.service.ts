import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EncuestaPre } from './entities/encuestaPre.entity';
import { EncuestaRes } from './entities/encuestaRes.entity';
import { CreateEncuestaResDto } from './dto/create-encuestaRes.dto';

@Injectable()
export class EncuestaService {

  constructor(
    @InjectModel( EncuestaPre.name )
    private readonly preguntaModel: Model<EncuestaPre>,
    @InjectModel( EncuestaRes.name )
    private readonly respuestaModel: Model<EncuestaRes>,

  ){}

  async createRespuesta(createEncuestaResDto: CreateEncuestaResDto) {

    try{
        const respuestas = createEncuestaResDto.respuestas.map((item) => ({
          preguntaId: item.preguntaId,
          respuesta: item.respuesta,
        }));
        await this.respuestaModel.create( respuestas );
        
      return {
        ok: true,
        msg: 'Se ha aguardado correctamente su respuesta'
      }
    }catch (error){
      this.handleExceptions(error);
    }

  }

  private handleExceptions( error:any ){
    console.log(error);
    throw new InternalServerErrorException('Cant create the product - check server logs')
  }

  async findAllquestions(){
    return this.preguntaModel.find()
  }

  


}
