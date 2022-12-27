import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';

const layouts = [HeaderComponent, FooterComponent, BannerComponent];

@NgModule({
  declarations: [layouts],
  exports: [layouts],
  imports: [RouterModule],
})
export class LayoutModule {}
