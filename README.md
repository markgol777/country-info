# CountryInfo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## environment
create .environment.ts in the root of the project like shown:

```
export const environment = {
  API_KEY: 'https://date.nager.at/api/v3',
};
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Preview of the aplication

<img width="1509" alt="image" src="https://github.com/user-attachments/assets/576c6d62-6987-4358-900a-0a293dd4a1a3">

functionality:
- Search by country name
- getting the countries & their codes from the [API](https://date.nager.at/swagger/index.html)
- random country widget
- Country page
  - rendering the corresponding holiday info from the [API](https://date.nager.at/swagger/index.html)
  - pagination for the years
  - Update the list of holidays based on the selected year.
  - The current year is the default
  - <img width="1512" alt="image" src="https://github.com/user-attachments/assets/e46d1939-bac9-4ed2-a6ad-c85ccb09cfed">
