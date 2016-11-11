import { Component, Input, OnInit,EventEmitter } from '@angular/core';
//import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector:'auth-service',
    template:`
                <app-login (LoginRoute)="Loginstate=$event"></app-login>
    `,
    styles:[`
    `],
    outputs:['LoginRoute']
})

export class AuthComponent implements OnInit{

    LoginRoute = new EventEmitter<string>()

    private ActionTitle:string = 'Peruzi Login!'

    constructor(
        //private router: Router,
       // private route: ActivatedRoute
    ) {}

    //private id:number = +this.route.snapshot.params['id'];

    ngOnInit()
    {
        //console.log(this.route.snapshot.url[0].path)
        //this.LoginRoute.emit(this.route.snapshot.url[0].path)
    }
}