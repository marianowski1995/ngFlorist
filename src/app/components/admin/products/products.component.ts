import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/interfaces/product.interface';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public editedProduct!: Product;
  public products!: Product[];

  constructor(private readonly productsService: ProductsService) {}

  public ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts(): void {
    this.productsService
      .getProducts()
      .subscribe((data: any) => (this.products = data));
  }

  public createProduct(product: Product) {
    this.productsService.createProduct(product);
    this.getAllProducts();
  }

  public updateProduct(id: string, product: Product) {
    this.productsService.updateProduct(id, product);
  }

  public removeProduct(product: Product) {
    this.productsService.removeProduct(product.id);
    this.products = this.products.filter(p => p.id != product.id);
  }
}
