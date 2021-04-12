import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathologyDetailComponent } from './pathology-detail/pathology-detail.component';
import { PathologyComponent } from './pathology/pathology.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:'pathology-dashboard',component:PathologyDetailComponent},
  {path:'edit-user-pathology/:pathologyId',component:PathologyDetailComponent},
  {path:'pathology-about/:pathologyId',component:PathologyComponent},
  {path:'pathology-profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathologyRoutingModule { }
