import { Injectable } from '@nestjs/common';
import { getJSON } from '../data-source/getJSONFromCSV';

@Injectable()
export class OrdersService {
  getAllOrders() {
    return getJSON();
  }
}
