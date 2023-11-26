import { IsString, MinLength } from "class-validator";

export class CreateEncuestaPreDto {

    @MinLength(3)
    @IsString()
    pregunta: string;
}
