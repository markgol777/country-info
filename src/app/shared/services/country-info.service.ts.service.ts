import { Injectable } from '@angular/core';
import { environment } from '../../../.environment';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Code, Holiday } from '../interfaces/interface';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryInfoServiceTsService {
  private api = environment.API_KEY;

  constructor(private http: HttpClient) {}

  getCountryCodes(): Observable<Array<Code>> {
    return this.http.get<Code[]>(`${this.api}/AvailableCountries`);
  }

  getNextHoliday(countryCode: string): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(
      `${this.api}/NextPublicHolidays/${countryCode}`
    );
  }

  getRandomCountriesWithHolidays(): Observable<
    { country: Code; holiday: Holiday }[]
  > {
    return this.getCountryCodes().pipe(
      switchMap((countries: Array<Code>) => {
        const randomCountries = this.getRandomElements(countries, 3);
        const holidayRequests = randomCountries.map(country =>
          this.getNextHoliday(country.countryCode).pipe(
            map((holidays: Array<Holiday>) => ({
              country,
              holiday: holidays[0],
            }))
          )
        );
        return forkJoin(holidayRequests);
      })
    );
  }

  private getRandomElements<T>(array: T[], count: number): T[] {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  getHolidaysByCountryAndYear(
    countryCode: string,
    year: number
  ): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(
      `${this.api}/PublicHolidays/${year}/${countryCode}`
    );
  }
}
