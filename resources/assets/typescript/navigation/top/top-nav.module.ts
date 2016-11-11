import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TopNavRouting, TopNavRouteProviders }  from './top-nav.routing'

import {TopNavComponent} from "./top-nav.component";


@NgModule({
  imports:     
  [
    CommonModule,
    TopNavRouting 
  ],
  declarations:
  [ 
    TopNavComponent, 
  ],
  exports:      
  [ 
    TopNavComponent 
  ],
  providers:    
  [TopNavRouteProviders ]
})

export class TopNavModule{

}