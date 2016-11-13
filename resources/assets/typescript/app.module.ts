///<reference path="../../../typings/index.d.ts"/>
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

/* type Imports Services */
import {TypeService} from "./types/type.service";

/* type Imports Rooting */
import { routing,appRoutingProviders }  from './app.routing'

import { AppComponent }   from './app.component';
import { HomeComponent }       from './home/home.component';
import { SearchBoxComponent }       from './search/search-box.component';

/* Contact Imports */
//import{ ContactModule }      from './contact/contact.module';

/* Mdoule Imports */
import{ CatModule }from './categories/cat.module';
import{ AuthModule }from './auth/auth.module';
import{ TopNavModule }from './navigation/top/top-nav.module';
import{ LeftNavModule }from './navigation/left/left-nav.module';
import{ LocationModule }from './locations/location.module'
import{ DashboardModule }from './dashboard/dashboard.module';;
import{ PropertyTypeModule }from './types/type.module';

//import {Sticky} from 'ng2-sticky-kit/ng2-sticky-kit';


@NgModule({
  imports:
  [ routing,
  
    DashboardModule,
    CatModule,
    HttpModule,
    AuthModule,
    JsonpModule,
    TopNavModule,
    LeftNavModule,
    BrowserModule,
    LocationModule,
    PropertyTypeModule,
  ],
  declarations:
  [ 
   // Sticky,
    AppComponent, 
    HomeComponent,
    SearchBoxComponent,
  ],
  providers:
  [
    TypeService,
     appRoutingProviders,
     
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }



