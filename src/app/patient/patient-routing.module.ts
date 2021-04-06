import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorprofileComponent } from './doctor/doctorprofile/doctorprofile.component';
import { PathologyComponent } from './pathology/pathology.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  
  {path:'book-appointment',component:BookAppointmentComponent},
  {path:'doctor-list',component:DoctorComponent},
  {path:'doctor-profile/:userId',component:DoctorprofileComponent},
  {path:'pathology-list',component:PathologyComponent},
  {path:'pharmacy-list',component:PharmacyComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
