import { IsMongoId, IsNumber, IsString } from "class-validator";


export class CreatePaymentDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly amount: number;

    @IsMongoId()
    readonly userId: string;

}
