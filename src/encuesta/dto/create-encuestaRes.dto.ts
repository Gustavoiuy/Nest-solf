import { Type } from "class-transformer";
import { ArrayMinSize, IsMongoId, IsString, MinLength, ValidateNested } from "class-validator";

export class RespuestaDto {

    @MinLength(3)
    @IsString()
    respuesta: string;

    @IsMongoId()
    preguntaId: string;
}

export class CreateEncuestaResDto {

    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => RespuestaDto)
    respuestas: RespuestaDto[];
}
