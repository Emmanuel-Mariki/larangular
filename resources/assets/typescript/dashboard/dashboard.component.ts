import { Component, OnInit,EventEmitter } from '@angular/core';

@Component({
    selector:'dashboard',
    template:`
        <div class="col-md-9" id="content">
            <ul class="nav nav-aills  nav-justified">
                <li role="aresentation"  class="dash-link" 
                    [class.dash-active]="viewMode == 'profile'">
                    <a (click)="viewMode='profile'">Profile</a>
                </li>
                <li role="aresentation"  class="dash-link" 
                    [class.dash-active]="viewMode == 'property'">
                    <a (click)="viewMode='property'">
                        Property<span class="badge">15</span>
                    </a>
                </li>
                <li role="aresentation" class="dash-link">
                    <a (click)="viewMode='inquires'">
                        Inquires<span class="badge">20</span>
                    </a>
                </li>
                <li role="aresentation" class="dash-link">
                    <a (click)="viewMode='subscription'">Subscription</a>
                </li>
                <li role="aresentation" class="dash-link">
                    <a (click)="viewMode='contacts'">Contacts</a>
                </li>
                <li role="aresentation" class="dash-link">
                    <a (click)="viewMode='analytics'">Analytics</a>
                </li>
                <li role="aresentation" class="dash-link" 
                    [class.dash-active]="viewMode == 'admin'">
                    <a (click)="viewMode='admin'">
                        Admin
                    </a>
                </li>
            </ul>
        </div>

        <div class="col-md-9" id="content" [ngSwitch]="viewMode">
            <template [ngSwitchCase]="'profile'" ngSwitchDefault>
                <app-profile></app-profile>
            </template>
            <template [ngSwitchCase]="'property'">
                <profile-listing></profile-listing>
            </template>
            <template [ngSwitchCase]="'admin'">
                <app-admin></app-admin>
            </template>
        </div>
        
    `,
    styles:[`
        .dash-link
        {
            border-radius:0px;
            background-color:#FBBC05;
        }
        .dash-link>a
        {
            color: #FFF;
            font-size: 100%;
            font-weight: 800;
            padding: 10px;
            margin: auto;
            text-align: center;
            cursor:pointer;
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
    outputs:['LoginRouteClicked']
})

export class DashboardComponent implements OnInit {

    private viewMode:string ='profile';

    LoginRouteClicked = new EventEmitter()

    constructor() {}

    ngOnInit()
    {
    }
    
    HideLeftAndSearch()
    {
        this.LoginRouteClicked.emit(false);
    }
}