import { Component } from '@angular/core';
import { CountryInfoServiceTsService } from '../../shared/services/country-info.service.ts.service';
import { OnInit } from '@angular/core';
import { Code } from 'src/app/shared/interfaces/interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public countries!: Array<Code>;
  public filteredCountries: Array<Code> = [];
  public filterText = '';
  constructor(private service: CountryInfoServiceTsService) {}

  ngOnInit(): void {
    this.service.getCountryCodes().subscribe((data: Array<Code>) => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  filterCountries(): void {
    const searchText = this.filterText.toLowerCase();
    this.filteredCountries = this.countries.filter(country =>
      country.name.toLowerCase().includes(searchText)
    );
  }
}
