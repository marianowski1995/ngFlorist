import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `
    <div class="container d-flex flex-column">
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">NgFlorist project</h1>
          <p>This is not a real store! :(</p>
          <p class="col-md-8 fs-4">
            NgFlorist is my first independent Angular Project. It is using
            bootstrap 5 for styling and Angular framework (version 15). You can
            see my repository containing code for this website or check my
            portfolio:
          </p>
          <button class="btn btn-primary btn-lg" type="button">
            <i class="bi bi-github"></i>
            Check my source code on Github
          </button>
          <button class="btn btn-success btn-lg mx-2">
            <i class="bi bi-browser-safari"></i>
            check my website
          </button>
        </div>
      </div>
    </div>
  `,
})
export class AboutComponent {}
