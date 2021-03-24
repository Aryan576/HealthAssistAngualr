import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import { SignupLoginModule } from './signup-login/signup-login.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesModule } from './services/services.module';
import { MessageService } from 'primeng/api';
import { AdminModule } from './admin/admin.module';
import { DataTablesModule } from "angular-datatables";
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { DatePipe } from '@angular/common';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { PathologyModule } from './pathology/pathology.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ToastModule,
    SignupLoginModule,
    AdminModule,
    DoctorModule,
    PatientModule,
    PharmacyModule,
    PathologyModule,
    ServicesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    ConfirmDialogModule
  ],
  providers: [MessageService,ConfirmationService,DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
