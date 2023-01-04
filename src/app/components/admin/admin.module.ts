import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { ProductEditorComponent } from './products/product-editor/product-editor.component';
import { ProductCreatorComponent } from './products/product-creator/product-creator.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    ProductEditorComponent,
    ProductCreatorComponent,
    ProductsComponent,
  ],
  imports: [AdminRoutingModule, CommonModule, FormsModule, SharedModule],
})
export class AdminModule {}
