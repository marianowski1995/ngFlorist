import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader.component';
import { SearchbarComponent } from './searchbar.component';

const components = [SearchbarComponent, LoaderComponent];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [],
})
export class SharedModule {}
