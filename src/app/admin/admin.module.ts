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
import { ProfileComponent } from './doctor/profile/profile.component';
import { ToastModule } from 'primeng/toast';
import { DietComponent } from './diet/diet.component';
import { AddEditDietComponent } from './diet/add-edit-diet/add-edit-diet.component';
import { MedicineComponent } from './medicine/medicine.component';
import { DiseaseComponent } from './disease/disease.component';
import { AddEditMedicineComponent } from './medicine/add-edit-medicine/add-edit-medicine.component';
import { AddEditDiseaseComponent } from './disease/add-edit-disease/add-edit-disease.component';
import { AddEditPatientComponent } from './patient/add-edit-patient/add-edit-patient.component';
import { CityComponent } from './city/city.component';
import { AddEditCityComponent } from './city/add-edit-city/add-edit-city.component';
import { UsersComponent } from './users/users.component';
import { AddEditUsersComponent } from './users/add-edit-users/add-edit-users.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [DashboardComponent, DoctorComponent, PatientComponent, PathologyComponent, PharmacyComponent, AddEditPharmacyComponent, AddEditPathologyComponent, AddEditDoctorComponent, LayoutHeaderComponent, LayoutSidebarComponent, ClinicComponent, AddEditClinicComponent, ProfileComponent, DietComponent, AddEditDietComponent, MedicineComponent, DiseaseComponent, AddEditMedicineComponent, AddEditDiseaseComponent, AddEditPatientComponent, CityComponent, AddEditCityComponent, UsersComponent, AddEditUsersComponent, AdminProfileComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    ConfirmDialogModule,
    ToastModule,
    NgxChartsModule,
    AlifeFileToBase64Module

  ],
  providers: [MessageService,ConfirmationService],

})
export class AdminModule { }
