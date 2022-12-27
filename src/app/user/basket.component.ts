import { Component, OnInit } from '@angular/core';
import { Product } from '../core/interfaces/product.interface';
import { BasketService } from '../core/services/basket.service';

@Component({
  selector: 'app-basket',
  template: `
    <div class="container">
      <h1>Your basket</h1>
      <table class="table my-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">available</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of basket">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.price | currency }}</td>
            <td>{{ item.available ? 'yes' : 'no' }}</td>
            <td>
              <button
                class="btn btn-primary"
                type="button"
                (click)="removeFromBasket(item)"
              >
                <i class="bi bi-trash"></i>
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <div class="d-flex justify-content-between">
        <h2>Total: {{ this.total | currency }}</h2>
        <button class="btn btn-primary">
          <i class="bi bi-bag"></i>
          Go to checkout
        </button>
      </div>
    </div>
  `,
})
export class BasketComponent implements OnInit {
  public basket!: any[];
  public total!: number;

  constructor(private readonly basketService: BasketService) {}

  ngOnInit(): void {
    this.getBasket();
    this.getTotal();
  }

  public getBasket() {
    this.basket = this.basketService.getBasket();
  }

  public getTotal() {
    this.total = this.basketService.getTotal();
  }

  public removeFromBasket(item: Product) {
    this.basketService.removeFromBasket(item);
  }
}
