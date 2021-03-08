import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    CountryComponent,
    MainPageComponent,
    CardsComponent
  ],
  imports: [CommonModule],
  exports: [
    HttpClientModule
  ],
})
export class CountriesModule { }
