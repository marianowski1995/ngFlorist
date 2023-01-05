import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader/loader.component";
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { BannerComponent } from "./banner/banner.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MessagesComponent } from './messages/messages.component';

const COMPONENTS = [
  SearchbarComponent,
  LoaderComponent,
  BannerComponent,
  FooterComponent,
  HeaderComponent,
];

@NgModule({
  declarations: [COMPONENTS, MessagesComponent],
  exports: [COMPONENTS, FormsModule, ReactiveFormsModule],
  imports: [RouterModule, CommonModule],
})
export class SharedModule {}
