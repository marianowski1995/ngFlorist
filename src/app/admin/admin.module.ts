import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin-products/admin-products.component';
import { ProductsCreatorComponent } from './admin-products/products-creator.component';
import { ProductsEditorComponent } from './admin-products/products-editor.component';

const routes: Routes = [{ path: 'admin', component: AdminComponent }];

@NgModule({
  declarations: [
    AdminComponent,
    ProductsCreatorComponent,
    ProductsEditorComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    SharedModule,
  ],
})
export class AdminModule {}
