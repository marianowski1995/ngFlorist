import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/interfaces/product.interface';
import { BasketService } from '../../../core/services/basket.service';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
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
