import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ LeftNavComponent }       from './left-nav.component';

const LeftNavRoutes: Routes = [
    // { 
    //   path: 'larangular',
    //   children:[
    //       {
    //           path:':url',
    //           component:LeftNavComponent
    //       }
    //   ]
    // }
];

export const LeftNavRouteProviders: any[] = [

];

export const LeftNavRouting: ModuleWithProviders = RouterModule.forChild(LeftNavRoutes);
