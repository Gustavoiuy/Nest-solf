import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from './entities/usuario.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Usuario.name,
        schema: UsuarioSchema
      }
    ]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SEED,
      signOptions: { expiresIn: '6h' },
    }),
  ]
})
export class AuthModule {}
