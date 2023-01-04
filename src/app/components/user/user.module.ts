import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasketComponent } from './basket/basket.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [BasketComponent],
  imports: [UserRoutingModule, CommonModule, FormsModule],
})
export class UserModule {}
