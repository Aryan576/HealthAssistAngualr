import { Component, OnInit } from '@angular/core';
import { PharmacyService } from 'src/app/services/pharmacy.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listPharmacy : {}
  constructor(private pharmacyService:PharmacyService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.pharmacyService.listPharmacy().then(res =>{
      this.listPharmacy = res.data
    })
  }

}
