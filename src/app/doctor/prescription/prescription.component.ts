import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrescriptionService } from 'src/app/services/prescription.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
})
export class PrescriptionComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  id = 0;
  PrescriptionData: {};
  prescriptionForm: FormGroup;
  // prescriptionData: Appointmen;
  listMedicine: {};
  prescriptionMedicineForm: FormGroup;
  listDisease: {};
  diseaseForm: FormGroup;
  listAppointmentDisease: {};
  listAppointment: {};
  listDiet: {};
  dietUserForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    public userDataService: UserdataService,
    private prescriptionService: PrescriptionService,
    private rut: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.dietUserForm = new FormGroup({
      dietid:new FormControl('',Validators.required),
      userid:new FormControl('',Validators.required)
    })

    this.id = this.route.snapshot.params.appointmentId;
    console.log(this.id);
  }

  submit() {}

  diseaseSubmit(){

  }
  dietUserSubmit(){

  }
}

