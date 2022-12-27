import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  template: `
    <form
      class="w-25 mx-auto text-center"
      #form="ngForm"
      (submit)="loginUser(form.value)"
    >
      <i class="bi bi-person-circle display-1"></i>

      <h1 class="h3 mb-3 fw-normal">sign in</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control my-3"
          id="floatingInput"
          placeholder="name@example.com"
          name="email"
          ngModel
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control my-3"
          id="floatingPassword"
          placeholder="Password"
          name="password"
          ngModel
        />
        <label for="floatingPassword">Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <p class="my-5 text-muted">
        Don't have an account?
        <a routerLink="/auth/sign-up">sign up</a>
      </p>
    </form>
  `,
})
export class SignInComponent {
  constructor(private authService: AuthService) {}

  public loginUser(form: any) {
    this.authService.login(form.email, form.password);
  }
}
