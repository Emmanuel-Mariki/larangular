import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AppComponent }       from './app.component';
import{ HomeComponent }       from './home/home.component';



// import{ DashboardComponent } from './dashboard/dashboard.component';
// import{ ProfileComponent } from './dashboard/profile/profile';
// import{ AdminComponent } from './dashboard/admin/admin';

const appRoutes: Routes = [
    { path: 'larangular', component: HomeComponent },
    // { 
    //     path: 'larangular/dashboard',
    //     children:[
    //         {
    //             path:'',
    //             component:DashboardComponent
    //         },
    //         {
    //             path:'profile',
    //             component:ProfileComponent
    //         },
    //         {
    //             path:'admin',
    //             component:AdminComponent
    //         }
    //     ]
    // },
    // { path: '**', component: AppComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
