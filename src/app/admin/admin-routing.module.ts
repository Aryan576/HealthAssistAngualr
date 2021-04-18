import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../signup-login/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AddEditCityComponent } from './city/add-edit-city/add-edit-city.component';
import { CityComponent } from './city/city.component';
import { AddEditClinicComponent } from './clinic/add-edit-clinic/add-edit-clinic.component';
import { ClinicComponent } from './clinic/clinic.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditDietComponent } from './diet/add-edit-diet/add-edit-diet.component';
import { DietComponent } from './diet/diet.component';
import { AddEditDiseaseComponent } from './disease/add-edit-disease/add-edit-disease.component';
import { DiseaseComponent } from './disease/disease.component';
import { AddEditDoctorComponent } from './doctor/add-edit-doctor/add-edit-doctor.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ProfileComponent } from './doctor/profile/profile.component';
import { AddEditMedicineComponent } from './medicine/add-edit-medicine/add-edit-medicine.component';
import { MedicineComponent } from './medicine/medicine.component';
import { AddEditPathologyComponent } from './pathology/add-edit-pathology/add-edit-pathology.component';
import { PathologyComponent } from './pathology/pathology.component';
import { AddEditPatientComponent } from './patient/add-edit-patient/add-edit-patient.component';
import { PatientComponent } from './patient/patient.component';
import { AddEditPharmacyComponent } from './pharmacy/add-edit-pharmacy/add-edit-pharmacy.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { AddEditUsersComponent } from './users/add-edit-users/add-edit-users.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'admin',component:DashboardComponent,children:[
    {path:'dashboard',component:AdminDashboardComponent},
    {path:'admin-profile',component:AdminProfileComponent},
    {path:'users',component:UsersComponent},
    {path:'add-users',component:AddEditUsersComponent},
    {path:'edit-users/:userId',component:AddEditUsersComponent},
    {path:'doctor',component:DoctorComponent},
    {path:'add-doctor',component:AddEditDoctorComponent},
    {path:'edit-doctor/:userId',component:AddEditDoctorComponent},
    {path:'doctor-profile/:userId',component:ProfileComponent},
    {path:'patient',component:PatientComponent},
    {path:'add-patient',component:AddEditPatientComponent},
    {path:'edit-patient/:userId',component:AddEditPatientComponent},
    {path:'pathology',component:PathologyComponent},
    {path:'add-pathology',component:AddEditPathologyComponent},
    {path:'edit-pathology/:pathologyId',component:AddEditPathologyComponent},
    {path:'assign-user-pathology/:pathologyId',component:PathologyComponent},
    {path:'pharmacy',component:PharmacyComponent},
    {path:'add-pharmacy',component:AddEditPharmacyComponent},
    {path:'edit-pharmacy/:pharmacyId',component:AddEditPharmacyComponent},
    {path:'assign-user-pharmacy/:pharmacyId',component:PharmacyComponent},
    {path:'clinic',component:ClinicComponent},
    {path:'add-clinic',component:AddEditClinicComponent},
    {path:'edit-clinic/:clinicId',component:AddEditClinicComponent},
    {path:'diet',component:DietComponent},
    {path:'add-diet',component:AddEditDietComponent},
    {path:'edit-diet/:dietId',component:AddEditDietComponent},
    {path:'disease',component:DiseaseComponent},
    {path:'add-disease',component:AddEditDiseaseComponent},
    {path:'edit-disease/:diseaseId',component:AddEditDiseaseComponent},
    {path:'medicine',component:MedicineComponent},
    {path:'add-medicine',component:AddEditMedicineComponent},
    {path:'edit-medicine/:medicineId',component:AddEditMedicineComponent},
    {path:'city',component:CityComponent},
    {path:'add-city',component:AddEditCityComponent},
    {path:'edit-city/:cityId',component:AddEditCityComponent}
  ],canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
