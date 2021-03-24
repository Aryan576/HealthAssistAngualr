import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../signup-login/auth.guard';
import { AppointmentComponent } from './appointment/appointment.component';
import { AddEditDietComponent } from './diet/add-edit-diet/add-edit-diet.component';
import { DietComponent } from './diet/diet.component';
import { AddEditDiseaseComponent } from './disease/add-edit-disease/add-edit-disease.component';
import { DiseaseComponent } from './disease/disease.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddEditMedicineComponent } from './medicine/add-edit-medicine/add-edit-medicine.component';
import { MedicineComponent } from './medicine/medicine.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:'doctor',component:DoctorComponent,children:[
    {path:'appointment',component:AppointmentComponent},
    {path:'profile',component:ProfileComponent},
    {path:'edit-profile',component:EditProfileComponent},
    {path:'prescription',component:PrescriptionComponent},
    {path:'doctor-medicine',component:MedicineComponent},
    {path:'doctor-add-medicine',component:AddEditMedicineComponent},
    {path:'doctor-edit-medicine/:medicineId',component:AddEditMedicineComponent},
    {path:'doctor-diet',component:DietComponent},
    {path:'doctor-add-diet',component:AddEditDietComponent},
    {path:'doctor-edit-diet/:dietId',component:AddEditDietComponent
  },
    {path:'doctor-disease',component:DiseaseComponent},
    {path:'doctor-add-disease',component:AddEditDiseaseComponent},
    {path:'doctor-edit-disease/:diseaseId',component:AddEditDiseaseComponent}
  ],canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
