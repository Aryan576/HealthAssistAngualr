import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Pathology } from 'src/app/interface/pathology';
import { PathologyService } from 'src/app/services/pathology.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-pathology-about',
  templateUrl: './pathology-about.component.html',
  styleUrls: ['./pathology-about.component.css'],
})
export class PathologyAboutComponent implements OnInit {
  id = 0;
  listUserPathology: Pathology;
  constructor(
    private route: ActivatedRoute,
    private pathologyService: PathologyService,
    private rut: Router,
    private userDataService: UserdataService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params.pathologyId;
    this.pathologyService.getPathologyById(this.id).then((res) => {
      this.listUserPathology = res.data;
    });
  }
}
