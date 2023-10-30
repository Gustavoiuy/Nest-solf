import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment } from './entities/payment.entity';

@Injectable()

export class PaymentsService {

    constructor(@InjectModel(Payment.name)
     private readonly PayModel: Model<Payment>,
     ) {}

 async create(createPaymentDto: CreatePaymentDto) {

    try {
        const { name, amount } = createPaymentDto;
        const order = new this.PayModel({ name, amount });
        return await order.save();
      } catch (error) {
        throw error;
      }
    }
   
  
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



   

  update(id: string, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  check(id: string, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

 
}
