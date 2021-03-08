import { CountriesService } from '../services/countries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent{

  constructor(private countriesService: CountriesService) {}

  get countries(){
    return this.countriesService.countries
  }

}
