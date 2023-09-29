import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { JugadoresService } from './jugadores.service';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('jugadores')
export class JugadoresController {
  constructor(private readonly jugadoresService: JugadoresService) {}


  @Get()
  findAll( @Query() paginationDto: PaginationDto) {
    return this.jugadoresService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.jugadoresService.findOne(term);
  }

}
