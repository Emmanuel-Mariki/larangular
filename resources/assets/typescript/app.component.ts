import { Component, OnInit } from '@angular/core';

import {TypeService} from './types/type.service';
import { PropertyTypes } from './types/type';

@Component({
    selector: 'my-app',
    template:`
    <top-nav [TopNavs]="Navigations" 
             (LoginRouteClicked)="getRoute($event)">
    </top-nav>
    <div class="container">
      <div class="row">
        <left-nav [TopNavs]="Navigations" 
                  *ngIf="ShowLeftNavs">
        </left-nav>
        <search-box  *ngIf="ShowLeftNavs"></search-box>
        <router-outlet></router-outlet>
      </div>
    </div>
    <!--<div class="container-fluid" id="footer"></div>-->
    `,
})
export class AppComponent implements OnInit {

  public LoginRoute;

  private errorMessage:string;

  public ShowLeftNavs:boolean=true;

  private Navigations:any;

  constructor(
    private TypeService:TypeService
  ){}

   ngOnInit()
   {
       this.getTopNavs();
   }

  
  getTopNavs()
  {
    this.TypeService.getPropTypes()
        .subscribe(
          Navigations => this.Navigations = Navigations,
          error =>  this.errorMessage = <any>error  
        );
  }
  getRoute(event)
  {
    this.ShowLeftNavs = event;
  }

 }
