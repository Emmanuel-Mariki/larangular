import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector:'country-city-list',
    template:'<city-list></city-list>',
    styles:[`
        th, td
        {
            text-align:center;
        }
        #term
        {
            position:relative;
            top:3px;
            border-radius:3px;
        }
    `],
})

 /**
 * name
 */
export class CountryCityListComponent{

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) {}
    

}