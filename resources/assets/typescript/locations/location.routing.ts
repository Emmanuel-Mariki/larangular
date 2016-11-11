import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './countries/country.component';
import { CountryFormComponent } from './countries/country.form';
import { CountryDetailsComponent } from './countries/country.details';
import { CountryCityListComponent } from './countries/country.city';

import { CityComponent } from './cities/city.component';
import { CityFormComponent } from './cities/city.form';
import { CityDetailsComponent } from './cities/city.details';

import { DistrictComponent } from './districts/district.component';
import { DistrictFormComponent } from './districts/district.form';
import { DistrictDetailsComponent } from './districts/district.details';

const LocationRoutes: Routes = [
     { 
      path: 'larangular/dashboard/countries',
      children:[
        {
            path:'',
            component:CountryComponent
        },
        {
            path:'new',
            component:CountryFormComponent

        },
        {
             path:':id',
             component:CountryDetailsComponent

        },    
        {
            path:'edit/:id',
            component:CountryFormComponent

        }, 
        {
            path:':name/cities',
            component:CountryCityListComponent

        },  
        {
            path:':name/cities/edit/:id',
            component:CityFormComponent

        }, 
        {
            path:':name/cities/:id',
            component:CityDetailsComponent

        },
      ]
    },
    { 
      path: 'larangular/dashboard/cities',
      children:[
        {
            path:'',
            component:CityComponent
        },
        {
            path:'new',
            component:CityFormComponent

        },
        {
             path:':id',
             component:CityDetailsComponent

        },    
        {
            path:'edit/:id',
            component:CityFormComponent

        }, 
      ]
    },
    { 
      path: 'larangular/dashboard/districts',
      children:[
        {
            path:'',
            component:DistrictComponent
        },
        {
            path:'new',
            component:DistrictFormComponent

        },
        // {
        //      path:':id',
        //      component:DistrictDetailsComponent

        // },    
        {
            path:'edit/:id',
            component:DistrictFormComponent

        }, 
      ]
    }
];

export const LocationRouteProviders: any[] = [

];

export const LocationRouting: ModuleWithProviders = RouterModule.forChild(LocationRoutes);
