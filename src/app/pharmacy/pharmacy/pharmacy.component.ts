import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Pathology } from 'src/app/interface/pathology';
import { Pharmacy } from 'src/app/interface/pharmacy';
import { PathologyService } from 'src/app/services/pathology.service';
import { PharmacyService } from 'src/app/services/pharmacy.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css'],
})
export class PharmacyComponent implements OnInit {
  isLog: boolean = false;
  id=0;
  listUserPharmacy:Pharmacy

  constructor(
    public userDataService: UserdataService,
    private rout: Router,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private rut: Router,
    private pharmacyService : PharmacyService
  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params.pharmacyId;
    this.pharmacyService.getPharmacyById(this.id).then(res => {
      this.listUserPharmacy = res.data;
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
    this.rout.navigateByUrl('');
  }
}
