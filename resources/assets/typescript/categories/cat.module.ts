import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }from '@angular/forms';

import { CatFilterPipe } from './CatFilterPipe';
import { CatComponent} from "./cat.component";
import { CatService } from './cat.service';
import { CatFormComponent } from './cat.form';
import { CatListComponent } from './cat.list';
import { CatDetailsComponent } from './cat.details';
import {CatRouting, CatRouteProviders }  from './cat.routing'

@NgModule({
  imports:     
  [
    CatRouting,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations:
  [ 
    CatComponent,
    CatFilterPipe,
    CatListComponent,
    CatFormComponent,
    CatDetailsComponent,
    
  ],
  exports:      
  [ 
    CatComponent, 
  ],
  providers:    
  [CatService,CatRouteProviders ]
})

export class CatModule{

}