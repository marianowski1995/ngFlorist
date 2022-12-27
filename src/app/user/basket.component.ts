import { Component, OnInit } from '@angular/core';
import { Product } from '../core/interfaces/product.interface';
import { BasketService } from '../core/services/basket.service';

@Component({
  selector: 'app-basket',
  template: `
    <!-- To display if basket is empty -->
    <div class="container text-center my-5" *ngIf="basket.length == 0">
      <i class="bi bi-basket display-1"></i>
      <h1 class="mt-5">Your basket is empty...</h1>
      <p>
        Browse our <a routerLink="/client/offer">offer</a> to buy something new
      </p>
    </div>

    <!-- To display if basket IS NOT empty -->
    <div class="container" *ngIf="basket.length > 0">
      <h1>Your basket</h1>
      <button class="btn btn-lg btn-primary" (click)="clearBasket()">
        Clear basket
      </button>
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
    this.getBasket();
  }

  public clearBasket() {
    this.basketService.clearBasket();
    this.getBasket();
  }
}
