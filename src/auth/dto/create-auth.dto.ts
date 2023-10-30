import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateAuthDto {

    @IsString()
    nombre: string;

    @IsString()
    apellidoP: string ;
    
    @IsString()
    apellidoM: string ;

    @IsEmail()
    email: string;

    @MinLength(5)
    password: string ;



}
