import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'left-nav',
  templateUrl:'./larangular/resources/assets/typescript/navigation/left/left-nav.component.html',
  styles:[`
   
  `],
  inputs:['TopNavs']
})
export class LeftNavComponent implements OnInit {

  private errorMessage:string;

   TopNavs:any;

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit()
  {
  
  }

}
