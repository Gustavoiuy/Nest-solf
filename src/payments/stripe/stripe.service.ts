import { Injectable } from '@nestjs/common';
import {Stripe} from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SK)

@Injectable()
export class StripeService {
  

    async generatePaymentIntent({
        amount,
        user,
        payment_method,
      }: {
        amount: number;
        user: string;
        payment_method: string;
      }) {
        const resPaymentIntent = await stripe.paymentIntents.create({
          amount: amount * 100, // Assuming 'amount' is in dollars
          currency: process.env.STRIPE_CURRENCY,
          payment_method_types: ['card'],
          payment_method,
          description: `Pago de Paquete Solf --> ${user}: Pago`,
        });
    
        return resPaymentIntent;
      }
    
      async confirmPaymentIntent(id: string, token: string) {
        const paymentIntent = await stripe.paymentIntents.confirm(id, {
          payment_method: token,
        });
    
        
    
        return paymentIntent;
      }
    
      async generatePaymentMethod(token: string) {
        const paymentMethod = await stripe.paymentMethods.create({
          type: 'card',
          card: { token },
        });
    
        return paymentMethod;
      }
    
      async getPaymentDetail(id: string) {
        const detailOrder = await stripe.paymentIntents.retrieve(id);
        return detailOrder;
      }
}
