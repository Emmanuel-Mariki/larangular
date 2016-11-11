import { Component,OnInit } from '@angular/core';


@Component({
    selector: 'dash-links',
    templateUrl:'./larangular/resources/assets/typescript/dashboard/link.html',
    styles:[`
        .dash-link
        {
            border-radius:0px;
            background-color:#FBBC05;
        }
        .dash-link>a
        {
            color:#FFF;
            font-size:100%;
            font-weight:800;
        }
        .dash-link>a:hover
        {
            border-radius:0px;
            background-color:#E04F5F;
            font-weight:600;
        }
        .dash-active
        {
            background-color:#E04F5F;
        }
        .nav-pills > li > a > .badge
        {
            position:relative;
            top:-1px;
            margin-left:3px;
        }
    `],
    inputs:[],
    outputs:[],

})

export class DashLinksComponent implements OnInit {

constructor() {}

ngOnInit(){}

}