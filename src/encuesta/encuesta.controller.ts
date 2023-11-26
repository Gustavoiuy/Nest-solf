import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncuestaService } from './encuesta.service';
import { CreateEncuestaResDto } from './dto/create-encuestaRes.dto';

@Controller('encuesta')
export class EncuestaController {
  constructor(private readonly encuestaService: EncuestaService) {}

  @Post('/respuesta')
  createRespuesta(@Body() createEncuestaResDto: CreateEncuestaResDto) {
    return this.encuestaService.createRespuesta(createEncuestaResDto);
  }

  @Get('/preguntas')
  findAllquestions() {
    return this.encuestaService.findAllquestions();
  }
}
