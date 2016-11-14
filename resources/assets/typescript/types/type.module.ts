import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }from '@angular/forms';

import {TypeRouting, PropertyTypeRouteProviders }  from './type.routing'

import {TypeComponent} from "./type.component";
import {TypeListComponent} from "./type-list.component"
import {TypeFormComponent} from "./type-form.component";
import {TypeViewComponent} from "./type-view.component";


@NgModule({
  imports:     
  [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeRouting 
  ],
  declarations:
  [ 
    TypeComponent, 
    TypeFormComponent,
    TypeListComponent,
    TypeViewComponent, 
  ],
  exports:      
  [ 
    TypeComponent 
  ],
  providers:    
  [ PropertyTypeRouteProviders ]
})

export class PropertyTypeModule{

}