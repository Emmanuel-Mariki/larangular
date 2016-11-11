import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }from '@angular/forms';

import { DashboardRouting,DashboardRouteProviders }from './dashboard.routing';

import{ DashboardComponent } from './dashboard.component';
import{ DashLinksComponent } from './dash.links';
import{ ProfileComponent } from './profile/profile';


@NgModule({
    imports: 
    [
        FormsModule,
        CommonModule,
        DashboardRouting,
        ReactiveFormsModule,
        
    ],
    declarations:
    [ 
        ProfileComponent,
        DashboardComponent,
        DashLinksComponent,
    ],
    exports: 
    [ 
        DashboardComponent
    ],
    providers:  
    [
        DashboardRouteProviders
    ]
})

export class DashboardModule{

}