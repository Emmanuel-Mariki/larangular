import { Component,OnInit } from '@angular/core';


@Component({

    selector: 'app-profile',

    templateUrl:'./larangular/resources/assets/typescript/dashboard/profile/profile.html',

    styles:[`
        .prof-row
        {
             padding: 15px;
            /* margin-top: 5px; */
            /* margin-bottom: 5px; */
            border-top: 1px solid;
            border-color: #e5e6e9 #dfe0e4 #d0d1d5;
            width: 100%;
            position: relative;
            left: 15px;
            background-color: #F6F7F9;
            cursor:pointer;
        }
        .prof-row:hover
        {
             background-color: #F5F3F3;
        }
        .dash-label
        {
            font-weight:800;
            color:#999;
        }
    `],

    inputs:[],

    outputs:[]

})

export class ProfileComponent implements OnInit {

    constructor() {}

    ngOnInit(){}

}