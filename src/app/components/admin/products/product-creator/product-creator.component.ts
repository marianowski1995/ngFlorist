import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'product-creator',
  templateUrl: './product-creator.component.html',
  styleUrls: ['./product-creator.component.css'],
})
export class ProductCreatorComponent {
  @Output() createdProduct: EventEmitter<Product> = new EventEmitter<Product>();

  public submit(form: any) {
    this.createdProduct.emit(form.value);
    console.log(form.value);
  }
}
