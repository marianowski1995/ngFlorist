import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from '../core/services/auth.service';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
