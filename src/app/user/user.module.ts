import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket.component';
import { OrderComponent } from './transaction/order.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: 'user',
    children: [
      { path: 'order', component: OrderComponent },
      { path: 'transaction', component: TransactionComponent },
      { path: 'basket', component: BasketComponent },
      { path: '', component: UserComponent },
    ],
  },
];

@NgModule({
  declarations: [
    OrderComponent,
    TransactionComponent,
    BasketComponent,
    UserComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
})
export class UserModule {}
