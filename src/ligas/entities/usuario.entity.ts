import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose';

@Schema()
export class Usuario extends Document {

    @Prop({ required: true  })
    nombre: string;

    @Prop({ required: true  })
    apellidoP: string ;
    
    @Prop({ required: true  })
    apellidoM: string ;
    
    @Prop({ required: true, unique: true  })
    email: string ;
    
    @Prop({ required: true  })
    password: string ;
    
    @Prop()
    pregunta: string ;

    @Prop()
    respuesta: string; 
    
    @Prop()
    img: string;

    @Prop({ required: true, default: 'USER_ROLE'  })
    role: string ;
    
    @Prop({ required: true, default: true  })
    status: boolean;

    @Prop({ required: true, default: false  })
    google: boolean;

}




export const UsuarioSchema = SchemaFactory.createForClass( Usuario );