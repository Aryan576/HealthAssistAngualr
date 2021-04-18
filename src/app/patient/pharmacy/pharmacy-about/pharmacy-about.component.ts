import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Pharmacy } from 'src/app/interface/pharmacy';
import { PharmacyService } from 'src/app/services/pharmacy.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-pharmacy-about',
  templateUrl: './pharmacy-about.component.html',
  styleUrls: ['./pharmacy-about.component.css'],
})
export class PharmacyAboutComponent implements OnInit {
  id = 0;
  listUserPharmacy: Pharmacy;
  constructor(
    private route: ActivatedRoute,
    private pharmacyService: PharmacyService,
    private rut: Router,
    private userdataservice: UserdataService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params.pharmacyId;
    this.pharmacyService.getPharmacyById(this.id).then((res) => {
      this.listUserPharmacy = res.data;
    });
  }
}
