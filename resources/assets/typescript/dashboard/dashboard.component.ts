import { Component, OnInit } from '@angular/core';

@Component({
    selector:'dashboard',
    template:`
        <dash-links></dash-links>
        <app-profile></app-profile>
    `,
    styles:[`
    
    `]
})

export class DashboardComponent implements OnInit {

    constructor() {}

    ngOnInit()
    {

    }
}