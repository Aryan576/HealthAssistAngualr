import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { City } from 'src/app/interface/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-add-edit-city',
  templateUrl: './add-edit-city.component.html',
  styleUrls: ['./add-edit-city.component.css'],
})
export class AddEditCityComponent implements OnInit {
  cityForm: FormGroup;
  cityData:City
  id = 0
  constructor(
    private cityService: CityService,
    private messageService: MessageService,
    private rout: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.id = this.router.snapshot.params.cityId

    this.cityService.getCityById(this.id).then(res => {
      this.cityData = res.data

      this.cityForm = new FormGroup({
        cityId: new FormControl(this.cityData.cityId, Validators.required),
        cityName: new FormControl(this.cityData.cityName, Validators.required),
        stateId: new FormControl(this.cityData.stateId, Validators.required),
      });

    })

    this.cityForm = new FormGroup({
      cityName: new FormControl('', Validators.required),
      stateId: new FormControl('', Validators.required),
    });
  }

  submit() {}
}
