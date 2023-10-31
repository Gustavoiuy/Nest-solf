import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}


  
  @Post()
  async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    try {
      const order = await this.paymentsService.create(createPaymentDto);
      return { data: order };
    } catch (error) {
      throw new HttpException('Algo ocurrió', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentsService.getOrder(id);
  }

  @Patch(':id')
  updateItem(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentsService.updatePaymentIntent(id, updatePaymentDto.token);
  }

  @Patch('/confirm/:id')
  checkItem(@Param('id') id: string) {
    return this.paymentsService.checkItem(id);
  }


}
