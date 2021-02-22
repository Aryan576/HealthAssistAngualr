import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    HttpClientModule
  ]
})
export class ServicesModule { }
