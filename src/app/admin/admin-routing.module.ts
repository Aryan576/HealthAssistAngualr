import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../signup-login/auth.guard';
import { AddEditClinicComponent } from './clinic/add-edit-clinic/add-edit-clinic.component';
import { ClinicComponent } from './clinic/clinic.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditDoctorComponent } from './doctor/add-edit-doctor/add-edit-doctor.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AddEditPathologyComponent } from './pathology/add-edit-pathology/add-edit-pathology.component';
import { PathologyComponent } from './pathology/pathology.component';
import { PatientComponent } from './patient/patient.component';
import { AddEditPharmacyComponent } from './pharmacy/add-edit-pharmacy/add-edit-pharmacy.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'doctor',component:DoctorComponent},
    {path:'add-doctor',component:AddEditDoctorComponent},
    {path:'edit-doctor/:userId',component:AddEditDoctorComponent},
    {path:'patient',component:PatientComponent},
    {path:'pathology',component:PathologyComponent},
    {path:'add-pathology',component:AddEditPathologyComponent},
    {path:'edit-pathology/:pathologyId',component:AddEditPathologyComponent},
    {path:'pharmacy',component:PharmacyComponent},
    {path:'add-pharmacy',component:AddEditPharmacyComponent},
    {path:'edit-pharmacy/:pharmacyId',component:AddEditPharmacyComponent},
    {path:'clinic',component:ClinicComponent},
    {path:'add-clinic',component:AddEditClinicComponent},
    {path:'edit-clinic/:clinicId',component:AddEditClinicComponent},
  ],canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
