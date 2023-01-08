import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/interfaces/order.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  @Input() orders: Order[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
