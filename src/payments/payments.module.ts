import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
 // Asegúrate de que la importación sea correcta
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from './entities/payment.entity';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService,],
  imports:[
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Payment.name,
        schema: PaymentSchema
      }
    ])
  ]
})
export class PaymentsModule {

}
