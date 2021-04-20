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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ViewPrescriptionComponent } from './view-prescription/view-prescription.component';
import { PharmacyAboutComponent } from './pharmacy/pharmacy-about/pharmacy-about.component';
import { PathologyAboutComponent } from './pathology/pathology-about/pathology-about.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';


@NgModule({
  declarations: [BookAppointmentComponent, DoctorComponent, PathologyComponent, PharmacyComponent, DoctorprofileComponent, ProfileComponent, ViewPrescriptionComponent, PharmacyAboutComponent, PathologyAboutComponent, ViewAppointmentComponent, DoctorAppointmentComponent, EditprofileComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class PatientModule { }
