import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../signup-login/auth.guard';
import { PathologyDetailComponent } from './pathology-detail/pathology-detail.component';
import { PathologyComponent } from './pathology/pathology.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:'pathology-dashboard',component:PathologyDetailComponent,canActivate:[AuthGuard]},
  {path:'edit-user-pathology/:pathologyId',component:PathologyDetailComponent,canActivate:[AuthGuard]},
  {path:'pathology-about/:pathologyId',component:PathologyComponent,canActivate:[AuthGuard]},
  {path:'pathology-profile',component:ProfileComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathologyRoutingModule { }
