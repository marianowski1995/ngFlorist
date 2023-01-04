import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { OfferComponent } from './offer/offer.component';

const routes: Routes = [
  {
    path: 'florist',
    children: [
      { path: '', pathMatch: 'full', component: OfferComponent },
      { path: 'offer', component: OfferComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule {}
