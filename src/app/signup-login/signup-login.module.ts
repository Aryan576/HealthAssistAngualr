import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupLoginRoutingModule } from './signup-login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';


@NgModule({
  declarations: [SignupLoginComponent, ResetPasswordComponent, OtpVerifyComponent],
  imports: [
    CommonModule,
    SignupLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SignupLoginModule { }
