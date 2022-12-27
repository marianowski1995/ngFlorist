import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <h1 class="text-center my-5">
      <i class="bi bi-hourglass-split"></i>
      Loading data...
    </h1>
  `,
})
export class LoaderComponent {}
