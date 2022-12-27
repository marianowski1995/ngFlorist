import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { SignUpComponent } from './sign-up.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'sign-in', component: SignInComponent },
    ],
  },
];

@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [RouterModule.forChild(routes), FormsModule, CommonModule],
})
export class AuthModule {}