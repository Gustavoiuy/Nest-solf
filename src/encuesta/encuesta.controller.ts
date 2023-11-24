import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncuestaService } from './encuesta.service';
import { CreateEncuestaDto } from './dto/create-encuesta.dto';
import { UpdateEncuestaDto } from './dto/update-encuesta.dto';
import { CreateEncuestaResDto } from './dto/create-encuestaRes.dto';

@Controller('encuesta')
export class EncuestaController {
  constructor(private readonly encuestaService: EncuestaService) {}

  @Post()
  createPregunta(@Body() createEncuestaDto: CreateEncuestaDto) {
    return this.encuestaService.createPregunta(createEncuestaDto);
  }

  @Post('/respuesta')
  createRespuesta(@Body() createEncuestaResDto: CreateEncuestaResDto) {
    return this.encuestaService.createRespuesta(createEncuestaResDto);
  }

  @Get()
  findAll() {
    return this.encuestaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.encuestaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEncuestaDto: UpdateEncuestaDto) {
    return this.encuestaService.update(+id, updateEncuestaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.encuestaService.remove(+id);
  }
}
