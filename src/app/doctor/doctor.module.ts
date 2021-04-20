import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor/doctor.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppointmentComponent } from './appointment/appointment.component';
import { ProfileComponent } from './profile/profile.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { MedicineComponent } from './medicine/medicine.component';
import { AddEditMedicineComponent } from './medicine/add-edit-medicine/add-edit-medicine.component';
import { DataTablesModule } from 'angular-datatables';
import { DietComponent } from './diet/diet.component';
import { AddEditDietComponent } from './diet/add-edit-diet/add-edit-diet.component';
import { DiseaseComponent } from './disease/disease.component';
import { AddEditDiseaseComponent } from './disease/add-edit-disease/add-edit-disease.component';
import { ButtonModule } from 'primeng/button';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';



@NgModule({
  declarations: [DoctorComponent, LayoutHeaderComponent, LayoutSidebarComponent, AppointmentComponent, EditProfileComponent, ProfileComponent, PrescriptionComponent, MedicineComponent, AddEditMedicineComponent, DietComponent, AddEditDietComponent, DiseaseComponent, AddEditDiseaseComponent, DoctorDashboardComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MDBBootstrapModule.forRoot(),
    DataTablesModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }
