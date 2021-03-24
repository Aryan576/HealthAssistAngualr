import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PathologyComponent } from './pathology/pathology.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DoctorprofileComponent } from './doctor/doctorprofile/doctorprofile.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [BookAppointmentComponent, DoctorComponent, PathologyComponent, PharmacyComponent, DoctorprofileComponent, ProfileComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class PatientModule { }
