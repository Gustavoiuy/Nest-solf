import { Injectable } from '@nestjs/common';
import { estadisticasJugadores } from './entities/estadistica-jugador.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EstadisticaJugadorService {

  constructor(
    @InjectModel( estadisticasJugadores.name  )
        private readonly EstadisticaJugadorModel: Model<estadisticasJugadores>

  ){}
  findAll(idLiga:string) {
    return this.EstadisticaJugadorModel.find({"liga": idLiga, "esActual":true})
                        .populate('equipo','nombre img')
                        .populate('jugador','nombre img')
                        .populate('liga', 'nombre img')
                        .sort({ goles: -1 })

  }
}
