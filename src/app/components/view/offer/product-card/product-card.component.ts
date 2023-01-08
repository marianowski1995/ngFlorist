import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() productAddedToBasket: EventEmitter<Product> =
    new EventEmitter<Product>();

  public emitProductToBasket(product: Product) {
    this.productAddedToBasket.emit(product);
  }
}
