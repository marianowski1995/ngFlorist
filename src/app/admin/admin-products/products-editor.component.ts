import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'admin-products-editor',
  template: `
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <i class="bi bi-basket mx-3"></i>
            Edit product
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          <form #form="ngForm" (submit)="emitUpdatedProduct(form.value)">
            <div class="mb-3">
              <label for="id" class="form-label"> Product id: </label>
              <input
                type="number"
                class="form-control"
                id="id"
                name="id"
                [(ngModel)]="product.id"
              />
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">Product name:</label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                [(ngModel)]="this.product.name"
              />
            </div>

            <div class="mb-3">
              <label for="price" class="form-label">Price ($):</label>
              <input
                type="number"
                class="form-control"
                id="price"
                name="price"
                [(ngModel)]="this.product.price"
              />
            </div>

            <div class="mb-3">
              <label for="description" class="form-label">description: </label>
              <textarea
                class="form-control"
                id="description"
                style="height: 100px"
                name="description"
                [(ngModel)]="this.product.description"
              ></textarea>
            </div>

            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="available"
                name="available"
                [(ngModel)]="this.product.available"
              />
              <label class="form-check-label" for="available">available</label>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                <i class="bi bi-x-circle"></i>
                Close
              </button>

              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                (click)="emitRemovedProduct()"
              >
                <i class="bi bi-trash"></i>
                delete product
              </button>

              <button
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                <i class="bi bi-folder-plus"></i>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
})
export class ProductsEditorComponent {
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
