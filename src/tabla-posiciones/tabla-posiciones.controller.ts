import { Controller, Get,  Param,  } from '@nestjs/common';
import { TablaPosicionesService } from './tabla-posiciones.service';

@Controller('tabla')
export class TablaPosicionesController {
  constructor(private readonly tablaPosicionesService: TablaPosicionesService) {}

 
//   @Get('liga/:ligaId')
//   findAll(@Param('ligaId') ligaId: string) {
//     return this.tablaPosicionesService.getTablaPorLiga(ligaId);
//   }
  @Get('liga/:ligaId')
findAll(@Param('ligaId') ligaId: string) {
  console.log('ligaId:', ligaId); // Verifica si ligaId se está capturando correctamente
  return this.tablaPosicionesService.getTablaPorLiga(ligaId);
}



 


}