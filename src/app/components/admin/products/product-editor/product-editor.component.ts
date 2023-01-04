import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css'],
})
export class ProductEditorComponent {
  @Input() public product!: Product;
  @Output() public removedProduct: EventEmitter<Product> =
    new EventEmitter<Product>();
  @Output() public updatedProduct: EventEmitter<Product> =
    new EventEmitter<Product>();

  public emitRemovedProduct() {
    this.removedProduct.emit(this.product);
  }

  public emitUpdatedProduct(form: any) {
    this.updatedProduct.emit(form);
  }
}
