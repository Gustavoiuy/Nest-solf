import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { JugadoresService } from './jugadores.service';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('jugadores')
export class JugadoresController {
  constructor(private readonly jugadoresService: JugadoresService) {}

  @Get(':id')
  getJugadoresPorEquipo(@Param('id') id: string) {
    return this.jugadoresService.getJugadoresPorEquipo(id);
  }

}
