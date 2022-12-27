import { Component, OnInit } from '@angular/core';
import { Product } from '../core/interfaces/product.interface';
import { BasketService } from '../core/services/basket.service';
import { ProductsService } from '../core/services/products.service';

@Component({
  selector: 'app-offer',
  template: `
    <div *ngIf="!products">
      <app-loader></app-loader>
    </div>
    <div
      class="container d-flex gap-4 flex-wrap justify-content-center"
      *ngIf="products"
    >
      <!-- PRODUCT CARD -->
      <div class="card" style="width: 18rem;" *ngFor="let product of products">
        <img src="../../assets/img/flower.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">
            {{ product.name }}
          </h5>
          <p class="card-text">
            {{ product.description }}
          </p>
          <button class="btn btn-primary" (click)="addToBasket(product)">
            <i class="bi bi-cart"></i> buy
          </button>

          <span class="ms-2">
            {{ product.price | currency }}
          </span>
        </div>
      </div>
    </div>
  `,
})
export class OfferComponent implements OnInit {
  public products!: Product[];

  constructor(
    private readonly productsService: ProductsService,
    private readonly basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts(): void {
    this.productsService
      .getProducts()
      .subscribe((data: any) => (this.products = data));
  }

  public addToBasket(product: Product) {
    this.basketService.addToBasket(product);
  }
}
