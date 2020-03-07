import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../components/auth/signup/signup.component';
import { SigninComponent } from '../components/auth/signin/signin.component';
import { SignoutComponent } from './../components/auth/signout/signout.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signout', component: SignoutComponent },
  { path: '', component: SigninComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
