import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { OfferComponent } from './offer/offer.component';
import { ViewRoutingModule } from './view-routing.module';

@NgModule({
  declarations: [OfferComponent, AboutComponent],
  imports: [ViewRoutingModule, FormsModule, CommonModule, SharedModule],
})
export class ViewModule {}
