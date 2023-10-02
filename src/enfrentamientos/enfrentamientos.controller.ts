import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnfrentamientosService } from './enfrentamientos.service';

@Controller('enfrentamientos')
export class EnfrentamientosController {
  constructor(private readonly enfrentamientosService: EnfrentamientosService) {}




  @Get('liga/:ligaId')
findByLiga(@Param('ligaId') ligaId: string) {
  return this.enfrentamientosService.findByLiga(ligaId);
}

@Get('equipo/:equipoId')
findByEquipo(@Param('equipoId') equipoId: string) {
  return this.enfrentamientosService.findByEquipo(equipoId);
}


}
