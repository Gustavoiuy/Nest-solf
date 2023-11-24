import { IsString, MinLength } from "class-validator";

export class CreateEncuestaResDto {

    @MinLength(3)
    @IsString()
    respuesta: string;
}
