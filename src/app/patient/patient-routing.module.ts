import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../signup-login/auth.guard';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorprofileComponent } from './doctor/doctorprofile/doctorprofile.component';
import { PathologyAboutComponent } from './pathology/pathology-about/pathology-about.component';
import { PathologyComponent } from './pathology/pathology.component';
import { PharmacyAboutComponent } from './pharmacy/pharmacy-about/pharmacy-about.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ViewPrescriptionComponent } from './view-prescription/view-prescription.component';


const routes: Routes = [
  {path:'view-prescription/:appointmentId',component:ViewPrescriptionComponent,canActivate:[AuthGuard]},
  {path:'book-appointment',component:BookAppointmentComponent,canActivate:[AuthGuard]},
  {path:'doctor-appointment/:userId',component:DoctorAppointmentComponent,canActivate:[AuthGuard]},
  {path:'doctor-list',component:DoctorComponent,canActivate:[AuthGuard]},
  {path:'doctor-profile/:userId',component:DoctorprofileComponent,canActivate:[AuthGuard]},
  {path:'pathology-list',component:PathologyComponent,canActivate:[AuthGuard]},
  {path:'pathology-learn/:pathologyId',component:PathologyAboutComponent},
  {path:'pharmacy-list',component:PharmacyComponent,canActivate:[AuthGuard]},
  {path:'pharmacy-learn/:pharmacyId',component:PharmacyAboutComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'view-appointment',component:ViewAppointmentComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
