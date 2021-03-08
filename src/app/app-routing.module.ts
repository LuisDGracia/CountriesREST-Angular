import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './countries/country/country.component';
import { MainPageComponent } from './countries/main-page/main-page.component';

const routes: Routes = [
  { path: 'countries', component: MainPageComponent },
  { path: 'countries/:country', component: CountryComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'countries' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
