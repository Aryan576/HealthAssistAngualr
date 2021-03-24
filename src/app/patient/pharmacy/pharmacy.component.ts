import { Component, OnInit } from '@angular/core';
import { PharmacyService } from 'src/app/services/pharmacy.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit {

  listPharmacy:{}
  constructor(private pharmacyService:PharmacyService) { }

  ngOnInit(): void {
    this.pharmacyService.listPharmacy().then(res =>{
      this.listPharmacy = res.data
    })
  }

}
