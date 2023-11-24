import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Usuario extends Document {
    
    _id?: string;
    
    @Prop({ required: true  })
    nombre: string;

    @Prop({ required: true  })
    apellidoP: string ;
    
    @Prop({ required: true  })
    apellidoM: string ;
    
    @Prop({ required: true, unique: true  })
    email: string ;
    
    @Prop({ required: true  })
    password?: string ;
    
    @Prop()
    pregunta: string ;

    @Prop()
    respuesta: string; 
    
    @Prop()
    img: string;

    @Prop({ type: [String],required: true, default: ['USER_ROLE']  })
    role: string[];
    
    @Prop({ required: true, default: true  })
    status: boolean;

    @Prop({ required: true, default: false  })
    google: boolean;

    @Prop({ default: 1 })
    ligasDisp: number

}


export const UsuarioSchema = SchemaFactory.createForClass( Usuario );