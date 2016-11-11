import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ Login } from './login/log';
import{ AuthComponent } from "./auth.component";
import{ LoginComponent } from './login/login';
import{ RegisterComponent } from "./register/register";
import{ ForgotPassComponent } from "./forgot/forgot.pass";

const AuthRoutes: Routes = [
    { 
      path: 'larangular',
      children:[
        {
            path:'login',
            component:AuthComponent
        },
        {
            path:'forgot-password',
            component:ForgotPassComponent
        },
        {
            path:'join',
            component:RegisterComponent
        },
      ]
    }
];

export const AuthRouteProviders: any[] = [

];

export const AuthRouting: ModuleWithProviders = RouterModule.forChild(AuthRoutes);
