import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ TypeComponent }       from './type.component';
import{ TypeFormComponent }       from './type-form.component';
import{ TypeViewComponent }       from './type-view.component';

import{ DashboardComponent } from '../dashboard/dashboard.component'

const PropertyTypeRoutes: Routes = [
   { path: 'larangular/dashboard', component: DashboardComponent },
  // { path: 'larangular/dashboard/property-types', component: TypeComponent },
  // { path: 'larangular/dashboard/property-types/new', component: TypeFormComponent },
  // { path: 'larangular/dashboard/property-types/:id', component: TypeViewComponent },
  // { path: 'larangular/dashboard/property-types/edit/:id', component: TypeFormComponent },
];

export const PropertyTypeRouteProviders: any[] = [

];

export const TypeRouting: ModuleWithProviders = RouterModule.forChild(PropertyTypeRoutes);
