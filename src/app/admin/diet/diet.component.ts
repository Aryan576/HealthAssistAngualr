import { Component, OnInit } from '@angular/core';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dietList : {}
  constructor(private dietService:DietService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.dietService.listDiet().then(res => {
      this.dietList = res.data
    })
  }
  delete(value){
    this.dietService.deleteDiet(value).subscribe(res => {
      console.log("Diet Deleted!!");

    })
  }
}
