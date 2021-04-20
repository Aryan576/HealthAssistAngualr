import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Pathology } from 'src/app/interface/pathology';
import { CityService } from 'src/app/services/city.service';
import { PathologyService } from 'src/app/services/pathology.service';

@Component({
  selector: 'app-add-edit-pathology',
  templateUrl: './add-edit-pathology.component.html',
  styleUrls: ['./add-edit-pathology.component.css'],
})
export class AddEditPathologyComponent implements OnInit {
  pathologyForm: FormGroup;
  pathologyData: Pathology;
  listCities: {};
  id = 0;

  constructor(
    private cityService: CityService,
    private pathologyService: PathologyService,
    private messageService: MessageService,
    private rout: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params.pathologyId;

    this.pathologyService.getPathologyById(this.id).then((res) => {
      this.pathologyData = res.data;
      console.log(this.pathologyData);

      this.pathologyForm = new FormGroup({
        pathologyId: new FormControl(this.pathologyData.pathologyId,Validators.required),
        pathologyName: new FormControl(this.pathologyData.pathologyName,Validators.required),
        pathologyTimings: new FormControl(this.pathologyData.pathologyTimings,Validators.required),
        address: new FormControl(this.pathologyData.address,Validators.required),
        phoneNo: new FormControl(this.pathologyData.phoneNo,Validators.required),
        rating: new FormControl(this.pathologyData.rating, Validators.required),
        about: new FormControl(this.pathologyData.about, Validators.required),
        cityId: new FormControl(this.pathologyData.cityId, Validators.required),
        pincode: new FormControl(this.pathologyData.pincode,Validators.required),
      });
    });

    this.cityService.listCity().then((res) => {
      this.listCities = res.data;
      // console.log(res.data);
    });

    this.pathologyForm = new FormGroup({
      pathologyName: new FormControl('', Validators.required),
      pathologyTimings: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNo: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
      cityId: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
    });
  }

  submit() {
    if (this.id) {
      this.pathologyService.updatePathology(this.pathologyForm.value).subscribe(res => {
        console.log(res);
        this.messageService.add({severity:'success', summary: 'Success', detail:'Successfully Updated!!'});
        this.rout.navigateByUrl('/admin/pathology')
      })
    } else {
      if (this.pathologyForm.valid) {
        this.pathologyService.addPathology(this.pathologyForm.value).subscribe((res) => {
            // if (res.status != 200) {
            this.messageService.add({severity: 'success',summary: 'Success',detail: 'Successfully Signup!!'});
            console.log(res.data);
            this.rout.navigateByUrl('admin/pathology');
            // }
            // else{
            // console.log(res);
            // this.messageService.add({severity:'warn', summary: 'Warn', detail: 'You have already registered!!'});
            // }
          });
      } else {
        this.messageService.add({severity: 'info',summary: 'Info',detail: 'Please Enter All Fields!!'});
      }
    }
  }
}
