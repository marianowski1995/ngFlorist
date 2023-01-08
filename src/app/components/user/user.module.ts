import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasketComponent } from './basket/basket.component';
import { UserRoutingModule } from './user-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountComponent } from './account/account.component';
import { TransactionSuccessComponent } from './transaction/transaction-success/transaction-success.component';
import { TransactionFailureComponent } from './transaction/transaction-failure/transaction-failure.component';

@NgModule({
  declarations: [
    BasketComponent,
    OrdersComponent,
    TransactionComponent,
    AccountComponent,
    TransactionSuccessComponent,
    TransactionFailureComponent,
  ],
  imports: [UserRoutingModule, CommonModule, FormsModule],
})
export class UserModule {}
