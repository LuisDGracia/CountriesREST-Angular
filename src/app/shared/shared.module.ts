import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountriesModule } from '../countries/countries.module';



@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [CommonModule, CountriesModule ],
  exports: [FooterComponent, NavbarComponent],
})
export class SharedModule {}
