import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Pharmacy } from 'src/app/interface/pharmacy';
import { CityService } from 'src/app/services/city.service';
import { PharmacyService } from 'src/app/services/pharmacy.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-pharmacy-detail',
  templateUrl: './pharmacy-detail.component.html',
  styleUrls: ['./pharmacy-detail.component.css'],
})
export class PharmacyDetailComponent implements OnInit {
  isLog: boolean = false;
  listPharmacy: {};
  pharmacyForm: FormGroup;
  listUserPharmacy: {};
  listcities: {};
  editUserPharmacy: FormGroup;
  editPharmacyData: Pharmacy;
  id = 0;
  constructor(
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private pharmacyService: PharmacyService,
    private cityService:CityService,
    private rut: Router,
    public userDataService: UserdataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params.pharmacyId;

    this.pharmacyService.listPharmacy().then(res => {
      this.listPharmacy = res.data;
    })
    this.cityService.listCity().then(res => {
      this.listcities = res.data;
    })

    // this.pharmacyService.listUserPharmacy(this.userDataService.user.userId).then(res => {
    //   this.listUserPharmacy = res.data;
    //   console.log(res.data);

    // })

    this.pharmacyService.listUserPharmacy(this.userDataService.user.userId).then(res => {
      this.listUserPharmacy = res.data;
      console.log("lis"+res.data);

    })

    this.pharmacyForm = new FormGroup({
      userid:new FormControl(this.userDataService.user.userId,Validators.required),
      pharmacyId:new FormControl('',Validators.required),
      pharmacyName:new FormControl('',Validators.required),
      pharmacyTimings:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      phoneNo:new FormControl('',Validators.required),
      about:new FormControl('',Validators.required),
      cityId:new FormControl('',Validators.required),
      pincode:new FormControl('',Validators.required)
    })

    this.pharmacyService.getPharmacyById(this.id).then(res => {
      this.editPharmacyData = res.data;

      this.pharmacyForm = new FormGroup({
        pharmacyId:new FormControl(this.editPharmacyData.pharmacyId,Validators.required),
        pharmacyName:new FormControl(this.editPharmacyData.pharmacyName,Validators.required),
        pharmacyTimings:new FormControl(this.editPharmacyData.pharmacyTimings,Validators.required),
        address:new FormControl(this.editPharmacyData.address,Validators.required),
        phoneNo:new FormControl(this.editPharmacyData.phoneNo,Validators.required),
        about:new FormControl(this.editPharmacyData.about,Validators.required),
        cityId:new FormControl(this.editPharmacyData.cityId,Validators.required),
        pincode:new FormControl(this.editPharmacyData.pincode,Validators.required)
      })
    })
    if (this.userDataService.user.email.length != 0 && this.userDataService.user != null) {
      this.isLog = true;
    } else {
      this.isLog = false;
    }
  }

  logout() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'User Logout Successfully!!',
    });

    this.userDataService.user = null;
    this.isLog = false;
    this.rut.navigateByUrl('');
  }
  submit(){
    if(this.id){
      this.pharmacyService.updatePharmacy(this.pharmacyForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg});
      })

    }
    else{
      this.pharmacyService.addAssignUserPharmacy(this.pharmacyForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg});
      })

    }
  }
}
