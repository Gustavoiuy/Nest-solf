import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('equipo')

export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @Get()
  findAll(@Query( ) paginationDto: PaginationDto  ) {
    return this.equipoService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipoService.findOne(id);
  }

  @Get('liga/:ligaId')
  findByLiga(@Param('ligaId') ligaId: string) {
    return this.equipoService.findByLiga(ligaId);
  }


}
