import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathologyComponent } from './pathology/pathology.component';


const routes: Routes = [
  {path:'pathology-dashboard',component:PathologyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathologyRoutingModule { }
