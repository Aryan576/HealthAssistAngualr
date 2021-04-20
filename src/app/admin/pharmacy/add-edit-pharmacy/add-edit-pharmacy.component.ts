import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Pharmacy } from 'src/app/interface/pharmacy';
import { CityService } from 'src/app/services/city.service';
import { PharmacyService } from 'src/app/services/pharmacy.service';

@Component({
  selector: 'app-add-edit-pharmacy',
  templateUrl: './add-edit-pharmacy.component.html',
  styleUrls: ['./add-edit-pharmacy.component.css'],
})
export class AddEditPharmacyComponent implements OnInit {
  pharmacyForm: FormGroup;
  listCities: {};
  id=0
  pharmacyData:Pharmacy
  constructor(
    private cityService: CityService,
    private pharmacyService: PharmacyService,
    private messageService: MessageService,
    private rout: Router,
    private router:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cityService.listCity().then((res) => {
      this.listCities = res.data;
      // console.log(res.data);
    });

    this.id = this.router.snapshot.params.pharmacyId;

    this.pharmacyService.getPharmacyById(this.id).then(res =>{

      this.pharmacyData = res.data

      this.pharmacyForm = new FormGroup({
        pharmacyId: new FormControl(this.pharmacyData.pharmacyId, Validators.required),
        pharmacyName: new FormControl(this.pharmacyData.pharmacyName, Validators.required),
        pharmacyTimings: new FormControl(this.pharmacyData.pharmacyTimings, Validators.required),
        address: new FormControl(this.pharmacyData.address, Validators.required),
        phoneNo: new FormControl(this.pharmacyData.phoneNo, Validators.required),
        rating: new FormControl(this.pharmacyData.rating, Validators.required),
        about: new FormControl(this.pharmacyData.about, Validators.required),
        cityId: new FormControl(this.pharmacyData.cityId, Validators.required),
        pincode: new FormControl(this.pharmacyData.pincode, Validators.required),
      });
    })

    this.pharmacyForm = new FormGroup({
      pharmacyName: new FormControl('', Validators.required),
      pharmacyTimings: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNo: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
      cityId: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
    });
  }

  submit() {
    if(this.id){
      this.pharmacyService.updatePharmacy(this.pharmacyForm.value).subscribe(res =>{
        this.messageService.add({severity:'success', summary: 'Success', detail:'Successfully Updated!!'});
        this.rout.navigateByUrl('/admin/pharmacy')
      })
    }
    else{
      if (this.pharmacyForm.valid) {
        this.pharmacyService.addPharmacy(this.pharmacyForm.value).subscribe(res => {
          // if (res.status != 200) {
            this.messageService.add({severity:'success', summary: 'Success', detail:'Successfully Added Pharmacy!!'});
            console.log(res.data);
            this.rout.navigateByUrl('admin/pharmacy');
          // }
          // else{
            // console.log(res);
            // this.messageService.add({severity:'warn', summary: 'Warn', detail: 'You have already registered!!'});
          // }
        })
      }
      else{
        this.messageService.add({severity:'info', summary: 'Info', detail: 'Please Enter All Fields!!'});
      }
    }
  }
}

