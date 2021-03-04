import { Component, OnInit } from '@angular/core';
import { PathologyService } from 'src/app/services/pathology.service';

@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.css']
})
export class PathologyComponent implements OnInit {
  dtOptions: DataTables.Settings = {}
  listPathology : {}
  constructor(private pathologyService:PathologyService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.pathologyService.listPathology().then(res =>{
      this.listPathology = res.data
    })
  }

  delete(value){
    this.pathologyService.deletePathology(value).subscribe(res => {
      console.log("Pathology deleted!!");

    })
  }
}
