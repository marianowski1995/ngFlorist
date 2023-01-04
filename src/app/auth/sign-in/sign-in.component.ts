import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  public loginUser(form: any) {
    this.authService.signIn(form.email, form.password);
    this.router.navigate(['/']);
  }
}
