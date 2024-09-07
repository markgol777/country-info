import { Component, OnInit } from '@angular/core';
import { CountryInfoServiceTsService } from '../../shared/services/country-info.service.ts.service';
import { Code, Holiday } from '../../shared/interfaces/interface'; // Corrected imports

@Component({
  selector: 'app-random-countries-widget',
  templateUrl: './random-countries-widget.component.html',
  styleUrls: ['./random-countries-widget.component.scss'],
})
export class RandomCountriesWidgetComponent implements OnInit {
  public countriesWithHolidays: { country: Code; holiday: Holiday }[] = [];
  public error = '';

  constructor(private countryService: CountryInfoServiceTsService) {}

  ngOnInit(): void {
    this.countryService.getRandomCountriesWithHolidays().subscribe({
      next: (data: { country: Code; holiday: Holiday }[]) => {
        this.countriesWithHolidays = data;
      },
      error: (err: Error) => {
        console.error(err);
        this.error = 'Failed to load data. Please try again later.';
      },
    });
  }
}
