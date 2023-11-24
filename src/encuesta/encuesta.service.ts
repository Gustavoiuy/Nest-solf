import { Injectable } from '@nestjs/common';
import { CreateEncuestaDto } from './dto/create-encuesta.dto';
import { UpdateEncuestaDto } from './dto/update-encuesta.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Encuesta } from './entities/encuesta.entity';
import { EncuestaRes } from './entities/encuestaRes.entity';
import { CreateEncuestaResDto } from './dto/create-encuestaRes.dto';

@Injectable()
export class EncuestaService {

  constructor(
    @InjectModel( Encuesta.name )
    private readonly preguntaModel: Model<Encuesta>,
    @InjectModel( EncuestaRes.name )
    private readonly respuestaModel: Model<EncuestaRes>,

  ){}


  createPregunta(createEncuestaDto: CreateEncuestaDto) {
    return 'This action adds a new encuesta';
  }

  createRespuesta(createEncuestaResDto: CreateEncuestaResDto) {
    return 'This action adds a new encuesta';
  }

  findAll() {
    return `This action returns all encuesta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} encuesta`;
  }

  update(id: number, updateEncuestaDto: UpdateEncuestaDto) {
    return `This action updates a #${id} encuesta`;
  }

  remove(id: number) {
    return `This action removes a #${id} encuesta`;
  }
}
