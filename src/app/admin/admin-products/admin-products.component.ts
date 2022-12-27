import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/interfaces/product.interface';
import { ProductsService } from '../../core/services/products.service';

@Component({
  template: `
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <app-searchbar></app-searchbar>
        <button
          class="btn btn-primary my-3 float-end"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#productsCreator"
        >
          + new product
        </button>
      </div>
      <span>Products total: {{ products.length }}</span>

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
          <tr *ngFor="let product of products">
            <th scope="row">
              {{ product.id }}
            </th>
            <td>{{ product.name }}</td>
            <td>{{ product.price | currency }}</td>
            <td>{{ product.available ? 'yes' : 'no' }}</td>
            <td>
              <button
                (click)="this.editedProduct = product"
                class="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#productsEditor"
              >
                <i class="bi bi-search"></i>
                Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal fade" id="productsCreator" tabindex="-1">
      <admin-products-creator
        (createdProduct)="createProduct($event)"
        [newId]="newProductId"
      ></admin-products-creator>
    </div>

    <div class="modal fade" id="productsEditor" tabindex="-1">
      <admin-products-editor
        [product]="editedProduct"
        (removedProduct)="removeProduct($event)"
        (updatedProduct)="updateProduct($event)"
      ></admin-products-editor>
    </div>
  `,
})
export class AdminComponent implements OnInit {
  public editedProduct!: Product;
  public newProductId!: number;
  public products!: Product[];

  constructor(private readonly productsService: ProductsService) {}

  public ngOnInit(): void {
    this.getAllProducts();
    this.generateProductId();
  }

  public getAllProducts(): void {
    this.productsService
      .getProducts()
      .subscribe((data: any) => (this.products = data));
  }

  public createProduct(product: Product) {
    this.productsService.createProduct(product);
    this.generateProductId();
    this.getAllProducts();
  }

  public generateProductId() {
    this.newProductId = this.productsService.generateProductId();
  }

  public updateProduct(product: Product) {
    this.productsService.updateProduct(product);
  }

  public removeProduct(product: Product) {
    this.productsService.removeProduct(product.id);
    this.products = this.products.filter(p => p.id != product.id);
  }
}
