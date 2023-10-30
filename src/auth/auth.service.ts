import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import * as bcryptjs from 'bcryptjs';

import { JwtService } from '@nestjs/jwt';


import { Usuario } from './entities/usuario.entity';
import { CreateAuthDto, LoginDto, RegisterUserDto } from './dto';
import { LoginResponse } from './interfaces/login.payload';
import { JwtPayload } from './interfaces/jwt.payload';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel( Usuario.name )
    private userModel: Model<Usuario>,

    private jwtService: JwtService
  ){}

  async create(createUserDto: CreateAuthDto): Promise<Usuario> {
    
    try {
      
      const {password,...userData} = createUserDto;

      //? encriptar la contraseña
      const newUser = new this.userModel({
        password: bcryptjs.hashSync( password, 10 ),
        ...userData
      })

      //? Guardar al usuario
      await newUser.save();

      // * retornar al usuario en resp
      const { password:_, ...user } = newUser.toJSON();

      return user;


    }catch (error) {
      if(error.code === 11000){
        throw new BadRequestException(`${ createUserDto.email } ya existe!`);
      }
      throw new InternalServerErrorException('Algo terrible a pasado!!!');
    }
  }

  findAll(): Promise<Usuario[]> {
    return this.userModel.find();
  }

  async findUserById(id: string){
    const user = await this.userModel.findById(id);
    const { password, ...rest  } = user.toJSON();
    return rest;
  }

  async register(registerDto: RegisterUserDto): Promise<LoginResponse> {

    //? como es funcion async se usa el await. Nos retorna el usuario ya creado. Solamente lo logeamos directamente
    const user = await this.create(registerDto);
    //console.log({user});
    
    return {
      user: user,
      token: this.getJwtToken( {id: user._id} )
    }
    
  }

  async login(loginDto: LoginDto): Promise<LoginResponse>{

    const { email, password } = loginDto;
      //* findOne({ email: email }) por eso es redundante
    const user = await this.userModel.findOne({ email })
      //? No encontro usuario
    if( !user ){
      throw new UnauthorizedException('Las credenciales no son validas');
    }
      //? contraseña es igual 
    if ( !bcryptjs.compareSync( password, user.password ) ) {
      throw new UnauthorizedException('Las credenciales no son validas');
    }
      //ToDoS el login es valido asi que retornamos el user de la bd quitandole la contraseña al objeto 
    const { password:_, ...rest  } = user.toJSON();

    return {
      user: rest,
      token: this.getJwtToken({ id: user.id  }),
    }

  }


  getJwtToken(payload: JwtPayload){

    const token = this.jwtService.sign(payload);
    return token;

  }



}
