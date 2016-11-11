import { Component, OnInit,EventEmitter} from '@angular/core';
//import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'top-nav',
  templateUrl:'./larangular/resources/assets/typescript/navigation/top/top-nav.component.html',
  styles:[`
    .navbar-default
    {
      /*background-color:#E04F5F;*/

      background-color: #6FD0E8;
      height:115px;
    }
  `],
  inputs:['TopNavs'],
  outputs:['LoginRouteClicked'],
})
export class TopNavComponent implements OnInit {

  private TopNavs:any;

  private errorMessage:string;

  LoginRouteClicked = new EventEmitter()

  constructor(
    //private ActiveRoute:ActivatedRoute
  ){}

  ngOnInit()
  {
    
  }
  HideLeftMenu()
  {
    this.LoginRouteClicked.emit(false);
  }
  ShowLeftMenu()
  {
    this.LoginRouteClicked.emit(true);
  }
}
