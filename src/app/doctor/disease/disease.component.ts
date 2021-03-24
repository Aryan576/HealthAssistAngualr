import { Component, OnInit } from '@angular/core';
import { DiseaseService } from 'src/app/services/disease.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  diseaseList:{}
  constructor(private diseaseService:DiseaseService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.diseaseService.listDisease().then(res => {
      this.diseaseList = res.data
      console.log(this.diseaseList);

    })
  }
  delete(value){
    this.diseaseService.deleteDisease(value).subscribe(res =>{
      console.log("Disease Deleted!!");

    })
  }
}
