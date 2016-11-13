import { Component,OnInit,EventEmitter } from '@angular/core';


@Component({
    selector: 'app-admin',
    template:`
    <div class="row content-inner" styles="border-color:#2EC3C9">
        <ul class="nav nav-aills  nav-justified">
            <li role="aresentation"  class="dash-admin-link" 
                [class.dash-admin-active]="AdminViewMode == 'types'">
                <a (click)="AdminViewMode='types'">Types</a>
            </li>
            <li role="aresentation"  class="dash-admin-link" 
                [class.dash-active]="AdminViewMode == 'catecories'">
                <a (click)="AdminViewMode='catecories'">
                    Catecories<span class="badge">15</span>
                </a>
            </li>
            <li role="aresentation" class="dash-admin-link">
                <a (click)="AdminViewMode='countries'">
                    countries<span class="badge">20</span>
                </a>
            </li>
            <li role="aresentation" class="dash-admin-link">
                <a (click)="AdminViewMode='cities'">Cities</a>
            </li>
            <li role="aresentation" class="dash-admin-link">
                <a (click)="AdminViewMode='districts'">Districts</a>
            </li>
            <li role="aresentation" class="dash-admin-link">
                <a (click)="AdminViewMode='policies'">
                Policies
                </a>
            </li>
            <li role="aresentation" class="dash-admin-link"
                [class.dash-admin-active]="AdminViewMode == 'users'">
                <a (click)="AdminViewMode='users'">
                Users
                </a>
            </li>
        </ul>
        <property-type></property-type>
    </div>
    `,
    styles:[`
        .dash-admin-link
        {
            border-radius:0px;
            background-color:#2EC3C9;;
        }
        .dash-admin-link>a
        {
            color: #FFF;
            font-size: 100%;
            font-weight: 800;
            padding: 10px;
            margin: auto;
            text-align: center;
            cursor:pointer;
        }
        .dash-admin-link>a:hover
        {
            border-radius:0px;
            background-color:#FBBC05;
            font-weight:600;
        }
        .dash-admin-active
        {
            background-color:#6FD0E8;
        }
        .nav-pills > li > a > .badge
        {
            position:relative;
            top:-1px;
            margin-left:3px;
        }
    
    `],
    inputs:[],
    outputs:['LoginRouteClicked'],
})

export class AdminComponent implements OnInit {

    AdminViewMode:string = 'types';

    constructor() {}

    ngOnInit()
    {
        
    }


}