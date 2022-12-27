import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  template: `
    <form class="w-25 mx-auto text-center" #form="ngForm">
      <i class="bi bi-person-circle display-1"></i>

      <h1 class="h3 mb-3 fw-normal">sign up</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control my-3"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control my-3"
          id="name"
          name="name"
          placeholder="name"
          ngModel
        />
        <label for="name">name</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control my-3"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <p class="my-5 text-muted">
        already have an account?
        <a routerLink="/auth/sign-in">sign in</a>
      </p>
    </form>
  `,
})
export class SignUpComponent {}
