import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listCities:{}
  constructor(private cityService:CityService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.cityService.listCity().then(res => {
      this.listCities = res.data
    })
  }

  delete(value){
    this.cityService.deleteCity(value).subscribe(res => {
      console.log("City Deleted!!");

    })
  }
}
