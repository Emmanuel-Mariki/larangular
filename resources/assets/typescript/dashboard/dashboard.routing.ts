import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ DashboardComponent } from './dashboard.component';
import{ ProfileComponent } from './profile/profile';

const DashboardRoutes: Routes = [
    { 
      path: 'dashboard',
      children:[
          {
              path:'',
              component:DashboardComponent
          },
          {
              path:'profile',
              component:ProfileComponent
          }
      ]
    }
];

export const DashboardRouteProviders: any[] = [

];

export const DashboardRouting: ModuleWithProviders = RouterModule.forChild(DashboardRoutes);
