import { IsString, MinLength } from "class-validator";

export class CreateEncuestaDto {

    @MinLength(3)
    @IsString()
    pregunta: string;
}
