import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ CatComponent } from './cat.component';
import{ CatFormComponent } from './cat.form';
import{ CatListComponent } from './cat.list';
import{ CatDetailsComponent } from './cat.details';

const CatRoutes: Routes = [
    { 
      path: 'larangular/dashboard/property-categories',
      children:[
        {
            path:'',
            component:CatComponent
        },
        {
            path:'new',
            component:CatFormComponent

        },
        {
            path:':id',
            component:CatDetailsComponent

        },    
        {
            path:'edit/:id',
            component:CatFormComponent

        }, 
      ]
    }
];

export const CatRouteProviders: any[] = [

];

export const CatRouting: ModuleWithProviders = RouterModule.forChild(CatRoutes);
