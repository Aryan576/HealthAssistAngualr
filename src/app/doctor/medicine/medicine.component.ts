import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  medicineList:{}
  
  constructor(private medicineService:MedicineService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.medicineService.listMedicine().then(res => {
      this.medicineList = res.data
    })

  }
  delete(value){
    this.medicineService.deleteMedicine(value).subscribe(res => {
      console.log("Medicine Deleted!!");
    })
  }
}
