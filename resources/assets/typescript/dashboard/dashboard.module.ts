import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }from '@angular/forms';

import { DashboardRouting,DashboardRouteProviders }from './dashboard.routing';

import{ AdminComponent } from './admin/admin';
import{ ProfileComponent } from './profile/profile';
import{ DashboardComponent } from './dashboard.component';
import{ DashLinksComponent } from './dash.links';
import{ ProfilePropertyListingComponent } from './listing/listing';
import{ PropertyTypeModule }from '../types/type.module';


@NgModule({
    imports: 
    [
        FormsModule,
        CommonModule,
        DashboardRouting,
        PropertyTypeModule,
        ReactiveFormsModule,
        
        
    ],
    declarations:
    [ 
        AdminComponent,
        ProfileComponent,
        DashboardComponent,
        DashLinksComponent,
        ProfilePropertyListingComponent,
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