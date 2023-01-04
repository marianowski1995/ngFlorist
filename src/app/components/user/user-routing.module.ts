import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  {
    path: 'user',
    children: [
      { path: 'basket', component: BasketComponent },
      { path: 'account', component: AccountComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
