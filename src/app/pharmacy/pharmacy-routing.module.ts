import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../signup-login/auth.guard';
import { PharmacyDetailComponent } from './pharmacy-detail/pharmacy-detail.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:'pharmacy-dashboard',component:PharmacyDetailComponent,canActivate:[AuthGuard]},
  {path:'edit-user-pharmacy/:pharmacyId',component:PharmacyDetailComponent,canActivate:[AuthGuard]},
  {path:'pharmacy-about',component:PharmacyComponent,canActivate:[AuthGuard]},
  {path:'pharmacy-profile',component:ProfileComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }
