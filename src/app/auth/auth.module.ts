import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from '../components/auth/signup/signup.component';
import { SigninComponent } from '../components/auth/signin/signin.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SigninComponent,
    SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
