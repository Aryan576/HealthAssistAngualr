import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacyDetailComponent } from './pharmacy-detail/pharmacy-detail.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:'pharmacy-dashboard',component:PharmacyDetailComponent},
  {path:'edit-user-pharmacy/:pharmacyId',component:PharmacyDetailComponent},
  {path:'pharmacy-about',component:PharmacyComponent},
  {path:'pharmacy-profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }
