import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';

const routes: Routes = [
  {path:'signup-login',component:SignupLoginComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'otp-verify',component:OtpVerifyComponent},
  {path:'verify-user',component:VerifyUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupLoginRoutingModule { }
