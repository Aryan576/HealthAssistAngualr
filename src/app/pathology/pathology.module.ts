import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { PathologyRoutingModule } from './pathology-routing.module';
import { PathologyComponent } from './pathology/pathology.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PathologyDetailComponent } from './pathology-detail/pathology-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [PathologyComponent, PathologyDetailComponent, ProfileComponent],
  imports: [
    CommonModule,
    PathologyRoutingModule,
    FormsModule,
    RatingModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class PathologyModule { }
