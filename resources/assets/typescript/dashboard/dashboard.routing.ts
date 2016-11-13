import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ DashboardComponent } from './dashboard.component';
// import{ ProfileComponent } from './profile/profile';
// import{ AdminComponent } from './admin/admin';

const DashboardRoutes: Routes = [
    { 
      path: 'larangular/dashboard',
      children:[
          {
              path:'',
              component:DashboardComponent
          }
        //   {
        //       path:'profile',
        //       component:ProfileComponent
        //   },
        //   {
        //       path:'admin',
        //       component:AdminComponent
        //   }
      ]
    }
];

export const DashboardRouteProviders: any[] = [

];

export const DashboardRouting: ModuleWithProviders = RouterModule.forChild(DashboardRoutes);
