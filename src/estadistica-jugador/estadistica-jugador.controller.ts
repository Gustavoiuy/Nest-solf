import { Controller, Get,Param } from '@nestjs/common';
import { EstadisticaJugadorService } from './estadistica-jugador.service';


@Controller('estadisticaJugador')
export class EstadisticaJugadorController {
  constructor(private readonly estadisticaJugadorService: EstadisticaJugadorService) {}

  @Get('liga/:idLiga')
  findAll(@Param('idLiga') idLiga: string) {
    return this.estadisticaJugadorService.findAll(idLiga);
  }

}
