import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathologyRoutingModule } from './pathology-routing.module';
import { PathologyComponent } from './pathology/pathology.component';


@NgModule({
  declarations: [PathologyComponent],
  imports: [
    CommonModule,
    PathologyRoutingModule
  ]
})
export class PathologyModule { }
