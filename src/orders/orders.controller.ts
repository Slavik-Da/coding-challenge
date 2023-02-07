import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getAll() {
    return await this.ordersService.getAllOrders();
  }
}