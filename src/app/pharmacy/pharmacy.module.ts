import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PharmacyDetailComponent } from './pharmacy-detail/pharmacy-detail.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [PharmacyComponent, PharmacyDetailComponent, ProfileComponent],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    RatingModule
  ]
})
export class PharmacyModule { }
