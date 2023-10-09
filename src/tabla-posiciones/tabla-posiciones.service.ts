import { Posicion } from './entities/tabla-Posiciones.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TablaPosicionesService {
  constructor(
    @InjectModel(Posicion.name)
    private readonly tablaPosicionModel: Model<Posicion>,
  ) {}

  async getTablaPorLiga(ligaId: string) {
    try {
      // Realiza la consulta para obtener solo las posiciones de la liga
      const posiciones = await this.tablaPosicionModel
        .findOne({ liga: ligaId })
        .select('posiciones')
        .populate({
          path: 'posiciones.equipo',
          model: 'Equipo',
          select: 'nombre',
        })
        .exec();

      if (!posiciones) {
        // Maneja el caso en que no se encuentren posiciones para la liga
        return null; // O puedes lanzar una excepción o manejarlo de otra manera
      }

      return posiciones.posiciones; // Retorna solo el campo de posiciones
    } catch (error) {
      // Maneja los errores si ocurren
      throw error;
    }
  }

  async getTablaPosicionesPorEquipo(equipoId: string) {
    try {
      // Realiza la consulta para obtener la tabla de posiciones del equipo
      const tablaPosiciones = await this.tablaPosicionModel
        .find({ 'posiciones.equipo': equipoId })
        .populate({
          path: 'posiciones.equipo',
          model: 'Equipo',
          select: 'nombre',
        })
        .exec();

      return tablaPosiciones;
    } catch (error) {
      // Maneja los errores si ocurren
      throw error;
    }
  }



  
}
