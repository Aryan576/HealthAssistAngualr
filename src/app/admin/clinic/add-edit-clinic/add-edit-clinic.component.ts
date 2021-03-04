import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Clinic } from 'src/app/interface/clinic';
import { CityService } from 'src/app/services/city.service';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-add-edit-clinic',
  templateUrl: './add-edit-clinic.component.html',
  styleUrls: ['./add-edit-clinic.component.css'],
})
export class AddEditClinicComponent implements OnInit {
  clinicForm: FormGroup;
  listCities: {};
  id= 0
  clinicData:Clinic

  constructor(
    private cityService: CityService,
    private clinicService: ClinicService,
    private messageService: MessageService,
    private rout: Router,
    private router:ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.id = this.router.snapshot.params.clinicId;

    this.clinicService.getClinicById(this.id).then(res => {

      this.clinicData = res.data
      // console.log(res);

      this.clinicForm = new FormGroup({
        clinicId: new FormControl(this.clinicData.clinicId, Validators.required),
        clinicName: new FormControl(this.clinicData.clinicName, Validators.required),
        clinicTiming: new FormControl(this.clinicData.clinicTiming, Validators.required),
        address: new FormControl(this.clinicData.address, Validators.required),
        phoneNo: new FormControl(this.clinicData.phoneNo, Validators.required),
        rating: new FormControl(this.clinicData.rating, Validators.required),
        about: new FormControl(this.clinicData.about, Validators.required),
        cityId: new FormControl(this.clinicData.cityId, Validators.required),
        pincode: new FormControl(this.clinicData.pincode, Validators.required),
      });

    })

    this.clinicForm = new FormGroup({
      clinicName: new FormControl('', Validators.required),
      clinicTiming: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNo: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
      cityId: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
    });

    this.cityService.listCity().then((res) => {
      this.listCities = res.data;
    });
  }
  submit() {
    if(this.id){
      this.clinicService.updateClinic(this.clinicForm.value).subscribe(res =>{
        this.messageService.add({severity:'success', summary: 'Success', detail:'Successfully Updated!!'});
        // console.log(res);
        this.rout.navigateByUrl('dashboard/clinic');
      })
    }
    else{
      if(this.clinicForm.valid){
        this.clinicService.addClinic(this.clinicForm.value).subscribe((res) => {
          // if (res.status != 200) {
            this.messageService.add({severity:'success', summary: 'Success', detail:'Successfully Signup!!'});
            console.log(res.data);
            this.rout.navigateByUrl('dashboard/clinic');
          // }
          // else{
            // console.log(res);
            // this.messageService.add({severity:'warn', summary: 'Warn', detail: 'You have already registered!!'});
          // }
        });
      }
      else{
        this.messageService.add({severity:'info', summary: 'Info', detail: 'Please Enter All Fields!!'});
      }
    }
  }
}
