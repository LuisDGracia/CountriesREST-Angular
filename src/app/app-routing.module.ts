
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesDisplayComponent } from './countries/pages/countries-display/countries-display.component';
import { CountryInfoComponent } from './countries/pages/country-info/country-info.component';

const routes: Routes = [
  { path: '', component: CountriesDisplayComponent },
  { path: 'country/:id', component: CountryInfoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'countries' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
