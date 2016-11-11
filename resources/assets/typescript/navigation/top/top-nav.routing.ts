import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ TypeComponent }       from '../../types/type.component';

const TopNavRoutes: Routes = [
    // { 
    //   path: 'larangular',
    //   children:[
    //       {
    //           path:':url',
    //           component:TypeComponent
    //       }
    //   ]
    // }
];

export const TopNavRouteProviders: any[] = [

];

export const TopNavRouting: ModuleWithProviders = RouterModule.forChild(TopNavRoutes);
