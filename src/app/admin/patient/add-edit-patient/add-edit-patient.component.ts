import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CityService } from 'src/app/services/city.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-edit-patient',
  templateUrl: './add-edit-patient.component.html',
  styleUrls: ['./add-edit-patient.component.css'],
})
export class AddEditPatientComponent implements OnInit {
  patientForm: FormGroup;
  listCities: {};
  id = 0;
  constructor(
    private cityService: CityService,
    private messageService: MessageService,
    private rout: Router,
    private router: ActivatedRoute,
    private patientService:PatientService
  ) {}

  ngOnInit(): void {
    this.patientForm = new FormGroup({
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      phoneNo:new FormControl('',Validators.required),
      age:new FormControl('',Validators.required),
      pincode:new FormControl('',Validators.required),
      cityId:new FormControl('',Validators.required),
      roleId:new FormControl(4,Validators.required)
    })

    this.cityService.listCity().then((res) => {
      this.listCities = res.data;
      console.log(res.data);
    });

  }

  submit() {
    this.patientService.adminAddPatientProfile(this.patientForm.value).subscribe(res => {
      console.log(res);

    })
  }
}
