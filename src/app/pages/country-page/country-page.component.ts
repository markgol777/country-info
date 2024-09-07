import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CountryInfoServiceTsService } from '../../shared/services/country-info.service.ts.service';
import { Holiday } from '../../shared/interfaces/interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss'],
})
export class CountryPageComponent implements OnInit {
  public holidays: Holiday[] = [];
  public years: number[] = Array.from({ length: 11 }, (_, i) => 2020 + i);
  public selectedYear: number = new Date().getFullYear();
  public countryCode = '';

  constructor(
    private countryInfoService: CountryInfoServiceTsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.countryCode = params.get('countryCode') || '';
      this.loadHolidays(this.selectedYear);
    });
  }

  loadHolidays(year: number): void {
    this.countryInfoService
      .getHolidaysByCountryAndYear(this.countryCode, year)
      .subscribe((holidays: Array<Holiday>) => {
        this.holidays = holidays;
      });
  }

  onYearChange(year: number): void {
    this.selectedYear = year;
    this.loadHolidays(year);
  }
}
