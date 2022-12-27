import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { OfferComponent } from './offer.component';

const routes: Routes = [
  {
    path: 'client',
    children: [
      { path: '', pathMatch: 'full', component: OfferComponent },
      { path: 'offer', component: OfferComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
];

@NgModule({
  declarations: [OfferComponent, AboutComponent],
  imports: [RouterModule.forChild(routes), FormsModule, CommonModule],
})
export class ClientModule {}
