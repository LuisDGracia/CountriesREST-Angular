import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { CardsComponent } from './components/cards/cards.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MatCardModule } from '@angular/material/card'



@NgModule({
  declarations: [
    MainPageComponent,
    CardsComponent,
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    HttpClientModule,
  ],
})
export class CountriesModule { }
