import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BasketComponent } from './basket/basket.component';
import { TransactionFailureComponent } from './transaction/transaction-failure/transaction-failure.component';
import { TransactionSuccessComponent } from './transaction/transaction-success/transaction-success.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {
    path: 'user',
    children: [
      { path: 'basket', component: BasketComponent },
      { path: 'account', component: AccountComponent },
      { path: 'checkout', component: TransactionComponent },
      { path: 'transaction-success', component: TransactionSuccessComponent },
      { path: 'transaction-failure', component: TransactionFailureComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
