import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document,Schema as MongooseSchema } from "mongoose";
import * as shortid from 'shortid';


@Schema({
    timestamps: true,
    versionKey: false,
    
})  

export class Payment extends Document {

    @Prop()
    name: string;

    @Prop()
    amount: number;

    @Prop({ default:() => shortid.generate()})
    localizator: string;

    @Prop({default:null})
    stripeId: string;

    @Prop({enum: ['success', 'fail', 'wait'], default: 'wait' })
    status: string;

    @Prop()
    idMongo: string;



}

export const PaymentSchema = SchemaFactory.createForClass( Payment );
