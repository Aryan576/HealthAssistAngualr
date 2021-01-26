import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupLoginRoutingModule } from './signup-login-routing.module';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SignupLoginModule { }
