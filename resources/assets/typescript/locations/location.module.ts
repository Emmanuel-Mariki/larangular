import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }from '@angular/forms';

import { LocationRouting, LocationRouteProviders }  from './location.routing'

import { LocationFilterPipe } from './LocationFilterPipe';

import { CountryService } from './countries/country.service';
import { CountryComponent } from './countries/country.component';
import { CountryListComponent } from './countries/country.list';
import { CountryFormComponent } from './countries/country.form';
import { CountryDetailsComponent } from './countries/country.details';
import { CountryCityListComponent } from './countries/country.city';

import { CityService } from './cities/city.service';
import { CityComponent } from './cities/city.component';
import { CityListComponent } from './cities/city.list';
import { CityFormComponent } from './cities/city.form';
import { CityDetailsComponent } from './cities/city.details';

import { DistrictService } from './districts/district.service';
import { DistrictComponent } from './districts/district.component';
import { DistrictListComponent } from './districts/district.list';
import { DistrictFormComponent } from './districts/district.form';
//import { DistrictDetailsComponent } from './districts/district.details';

@NgModule({
  imports:     
  [
    FormsModule,
    CommonModule,
    LocationRouting,
    ReactiveFormsModule,
  ],
  declarations:
  [ 
    CountryComponent,
    LocationFilterPipe,
    CountryListComponent,
    CountryFormComponent,
    CountryDetailsComponent,
    CountryCityListComponent,

    CityComponent,
    CityListComponent,
    CityFormComponent,
    CityDetailsComponent,

    DistrictComponent,
    DistrictListComponent,
    DistrictFormComponent,
   // DistrictDetailsComponent,
  ],
  exports:      
  [ 
    CityComponent,
    CountryComponent,
    DistrictComponent,
  ],
  providers:    
  [DistrictService,CityService,CountryService,LocationRouteProviders ]
})

export class LocationModule{

}