import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MatCardModule } from '@angular/material/card';
import { CountriesDisplayComponent } from './pages/countries-display/countries-display.component';
import { CountryInfoComponent } from './pages/country-info/country-info.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardsComponent,
    FiltersComponent,
    CountriesDisplayComponent,
    CountryInfoComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule
  ],
  exports: [
    HttpClientModule,
    FiltersComponent
  ],
})

export class CountriesModule { }
