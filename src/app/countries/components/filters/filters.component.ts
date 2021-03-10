import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  pais: string="";

  constructor( private countriesService: CountriesService ) { }

  buscar(){
    console.log( this.pais )

    console.log(this.countriesService.getCountry( this.pais ))

    this.pais = ''
  }

}
