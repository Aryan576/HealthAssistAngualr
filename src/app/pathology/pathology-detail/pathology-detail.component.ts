import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Pathology } from 'src/app/interface/pathology';
import { CityService } from 'src/app/services/city.service';
import { PathologyService } from 'src/app/services/pathology.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-pathology-detail',
  templateUrl: './pathology-detail.component.html',
  styleUrls: ['./pathology-detail.component.css'],
})
export class PathologyDetailComponent implements OnInit {
  isLog: boolean = false;

  listPathology: {};
  pathologyForm: FormGroup;
  listUserPathology: {};
  listCity: {};
  editUserPathology: FormGroup;
  editPathologyData: Pathology;
  id = 0;

  constructor(
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private pathologyService: PathologyService,
    private cityService:CityService,
    private rut: Router,
    public userDataService: UserdataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {


    this.id = this.route.snapshot.params.pathologyId;
    console.log("pa"+this.id);


    this.pathologyService.listPathology().then(res => {
      this.listPathology = res.data;
    })
    this.cityService.listCity().then(res => {
      this.listCity = res.data;
    })

    console.log("us"+this.userDataService.user.userId);

    this.pathologyService.listUserPathology(this.userDataService.user.userId).then(res => {
      this.listUserPathology = res.data;
      console.log(res.data);

    })

    this.pathologyForm = new FormGroup({
      userId:new FormControl(this.userDataService.user.userId,Validators.required),
      pathologyId:new FormControl('',Validators.required),
      pathologyName:new FormControl('',Validators.required),
      pathologyTimings:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      phoneNo:new FormControl('',Validators.required),
      about:new FormControl('',Validators.required),
      cityId:new FormControl('',Validators.required),
      pincode:new FormControl('',Validators.required)
    })

    this.pathologyService.getPathologyById(this.id).then(res => {
      this.editPathologyData = res.data;

      this.pathologyForm = new FormGroup({
        pathologyId:new FormControl(this.editPathologyData.pathologyId,Validators.required),
        pathologyName:new FormControl(this.editPathologyData.pathologyName,Validators.required),
        pathologyTimings:new FormControl(this.editPathologyData.pathologyTimings,Validators.required),
        address:new FormControl(this.editPathologyData.address,Validators.required),
        phoneNo:new FormControl(this.editPathologyData.phoneNo,Validators.required),
        about:new FormControl(this.editPathologyData.about,Validators.required),
        cityId:new FormControl(this.editPathologyData.cityId,Validators.required),
        pincode:new FormControl(this.editPathologyData.pincode,Validators.required)
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
      this.pathologyService.updatePathology(this.pathologyForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg});
        })
    }
    else {
      this.pathologyService.addAssignUserPathology(this.pathologyForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg});
        })
    }

    this.rut.navigateByUrl('pathologyhome')
    console.log(this.pathologyForm.value);
  }
}
