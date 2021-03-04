import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { PathologyComponent } from './pathology/pathology.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { AddEditPharmacyComponent } from './pharmacy/add-edit-pharmacy/add-edit-pharmacy.component';
import { AddEditPathologyComponent } from './pathology/add-edit-pathology/add-edit-pathology.component';
import { AddEditDoctorComponent } from './doctor/add-edit-doctor/add-edit-doctor.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClinicComponent } from './clinic/clinic.component';
import { AddEditClinicComponent } from './clinic/add-edit-clinic/add-edit-clinic.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
  declarations: [DashboardComponent, DoctorComponent, PatientComponent, PathologyComponent, PharmacyComponent, AddEditPharmacyComponent, AddEditPathologyComponent, AddEditDoctorComponent, LayoutHeaderComponent, LayoutSidebarComponent, ClinicComponent, AddEditClinicComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    ConfirmDialogModule
  ],
  providers: [MessageService,ConfirmationService],

})
export class AdminModule { }
