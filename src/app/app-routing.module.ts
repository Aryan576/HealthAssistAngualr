import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OtpVerifyComponent } from './signup-login/otp-verify/otp-verify.component';
import { ResetPasswordComponent } from './signup-login/reset-password/reset-password.component';
import { SignupComponent } from './signup-login/signup/signup.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup-login',component:SignupComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'otp-verify',component:OtpVerifyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
