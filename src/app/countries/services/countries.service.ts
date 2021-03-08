import { Country } from './../interface/country.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private url: string = 'https://restcountries.eu/rest/v2';
  private filter: string =
    '?fields=flag;name;nativeName;population;region;subregion;capital;currencies;topLevelDomain;borders';

  private _countries: Country[] = []

  constructor(private http: HttpClient) {
    this.Loadcountries();
  }

  get countries(): Country[]{
    return [...this._countries]
  }

  Loadcountries(){
    this.http.get(`${this.url}/all${this.filter}`)
        .subscribe( ( resp: any ) => this._countries = resp )
  }

}
