import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {

    readonly name?: string;
    readonly amount?: number;
    readonly status?: string;
    readonly token?: string;
}
