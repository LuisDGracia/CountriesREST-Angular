import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CardsComponent } from './components/cards/cards.component';
import { FiltersComponent } from './components/filters/filters.component';



@NgModule({
  declarations: [
    CountryComponent,
    MainPageComponent,
    CardsComponent,
    FiltersComponent,
  ],
  imports: [CommonModule],
  exports: [
    HttpClientModule
  ],
})
export class CountriesModule { }
