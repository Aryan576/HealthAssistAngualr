import { Component, OnInit } from '@angular/core';
import { PathologyService } from 'src/app/services/pathology.service';

@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.css']
})
export class PathologyComponent implements OnInit {

  listPathology:{}
  constructor(private pathologyService:PathologyService) { }

  ngOnInit(): void {
    this.pathologyService.listPathology().then(res => {
      this.listPathology = res.data
    })
  }

}
