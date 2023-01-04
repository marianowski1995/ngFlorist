import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSignUpForm } from '../../core/interfaces/user.interface';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up-component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public signUp(): void {
    const userData: UserSignUpForm = this.form.getRawValue();
    this.authService.signUp(userData);
  }

  private initForm() {
    this.form = this.fb.group({
      email: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3000),
      ]),
      name: this.fb.control('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1000),
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3000),
      ]),
    });
  }
}
