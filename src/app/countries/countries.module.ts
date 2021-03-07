import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [CountryComponent, MainPageComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class CountriesModule { }
