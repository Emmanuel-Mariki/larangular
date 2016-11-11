import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AppComponent }       from './app.component';
import{ HomeComponent }       from './home/home.component';

const appRoutes: Routes = [
{ path: 'larangular', component: HomeComponent },
{ path: '**', component: AppComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);