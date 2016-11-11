import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LeftNavRouting, LeftNavRouteProviders }  from './left-nav.routing'

import {LeftNavComponent} from "./left-nav.component";


@NgModule({
  imports:     
  [
    CommonModule,
    LeftNavRouting 
  ],
  declarations:
  [ 
    LeftNavComponent, 
  ],
  exports:      
  [ 
    LeftNavComponent 
  ],
  providers:    
  [LeftNavRouteProviders ]
})

export class LeftNavModule{

}