import { Injectable } from '@nestjs/common';

import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment } from './entities/payment.entity';
import {Stripe} from 'stripe'
import { StripeService } from './stripe/stripe.service';
import { Usuario } from './entities/usuario.entity';

const stripe = new Stripe(process.env.STRIPE_SK)

@Injectable()

export class PaymentsService {

    constructor(@InjectModel(Payment.name)
      private readonly PayModel: Model<Payment>,
      private readonly stripeService: StripeService,
      @InjectModel( Usuario.name  )
      private usuarioModel: Model<Usuario>
    ) {}
//Crear Orden
  async create(createPaymentDto: CreatePaymentDto) {

    try {
        const { name, amount, userId } = createPaymentDto;
        const order = new this.PayModel({ name, amount, userId  });
          await order.save();
          return order
      } catch (error) {
        throw error;
      }
    }
   
//Traer detalle de la orden
 async getOrder(id: string) {

    const userData = await this.PayModel.findOne({ localizator: id })
    .exec();
    if (!userData) {
        // Maneja el caso en que no se encuentren posiciones para la liga
        return null; // O puedes lanzar una excepción o manejarlo de otra manera
      }

  return userData;
} catch (error) {
  // Maneja los errores si ocurren
  throw error;
}


async updatePaymentIntent(id: string, token: string) {
    try {
      // Buscamos la orden en nuestra base de datos
      const resOrder = await this.PayModel.findOne({ localizator:id });

      // Generamos el método de pago en Stripe
      const responseMethod = await this.stripeService.generatePaymentMethod(token);

      // Generamos la intención de pago
      const paymentIntentData = {
        amount: resOrder.amount,
        user: resOrder.name,
        payment_method: responseMethod.id,
      };
console.log(paymentIntentData)
      const resPaymentIntent = await this.stripeService.generatePaymentIntent(paymentIntentData);

      // Actualizamos la orden con el ID de la intención de pago en la base de datos
      await this.PayModel.updateOne(
        { localizator:id },
        { stripeId: resPaymentIntent.id },
      );

      

      return resPaymentIntent;
    } catch (e) {
      console.log(e.message);
      throw new Error('Algo ocurrió');
    }
  }

  

  async checkItem(localizator: string) {
    try {
      // Buscamos la orden en nuestra base de datos
      const resOrder = await this.PayModel.findOne({ localizator });

      if (!resOrder) {
        throw new Error('Orden no encontrada');
      }

      // Solicitamos a Stripe que nos devuelva la información de la orden
      const detailStripe = await this.stripeService.getPaymentDetail(resOrder.stripeId);

      // Determinamos el estado de la orden
      const status = detailStripe.status.includes('succe') ? 'success' : 'fail';

      // Actualizamos nuestra orden con el estado
      await this.PayModel.updateOne({ localizator }, { status });

      if (resOrder.amount === 200 ){
        await this.actualizarLigasDisp( resOrder.userId, 10);
      }else if( resOrder.amount === 100 ){
        await this.actualizarLigasDisp(resOrder.userId, 6);
      }else if( resOrder.amount === 50 ){
        await this.actualizarLigasDisp(resOrder.userId, 3);
      }

      return detailStripe;
    } catch (e) {
      console.log(e.message);
      throw new Error('Algo ocurrió');
    }
  }


  private async actualizarLigasDisp(userId: string, cantidad: number) {
    try {
      // Buscar el usuario por su ID
      const usuario = await this.usuarioModel.findById(userId);

      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }

      // Actualizar ligasDisp
      usuario.ligasDisp += cantidad;

      // Guardar los cambios en la base de datos
      await usuario.save();
    } catch (error) {
      console.error(error.message);
      throw new Error('Error al actualizar ligasDisp');
    }
  }



}
