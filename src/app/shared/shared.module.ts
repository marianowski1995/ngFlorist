import { NgModule } from '@angular/core';
import { SearchbarComponent } from './searchbar.component';

const components = [SearchbarComponent];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [],
})
export class SharedModule {}
