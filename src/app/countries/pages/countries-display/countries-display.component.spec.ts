import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesDisplayComponent } from './countries-display.component';

describe('CountriesDisplayComponent', () => {
  let component: CountriesDisplayComponent;
  let fixture: ComponentFixture<CountriesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
