import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';

import { Usuario } from './entities/usuario.entity';

import { CreateAuthDto, LoginDto, RegisterUserDto } from './dto';

import { LoginResponse } from './interfaces/login.payload';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto ){
    return this.authService.login( loginDto );
  }

  @Post('/register')
  register(@Body() registerDto: RegisterUserDto){
    return this.authService.register( registerDto );
  }

  @UseGuards( AuthGuard )
  @Get()
  findAll(  ) {

    return this.authService.findAll();
  }

  @UseGuards( AuthGuard )
  @Get('/check-token')
  checkToken(@Request() req: Request): LoginResponse{
    const user = req['usuario'] as Usuario;

    return {
      user,
      token: this.authService.getJwtToken({ id: user._id })
    }
  }

}
