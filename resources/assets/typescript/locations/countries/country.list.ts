import { Component,OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";

import { Country } from './country';
import { CountryService } from './country.service';

@Component({
    selector:'country-list',
    templateUrl:'./larangular/resources/assets/typescript/locations/countries/country.list.html',
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
export class CountryListComponent implements OnInit {

    @Input() term:any ='';
    
    private selectedId: number;

    private errorMessage: string;

    private successMessage:string;

    private Active:boolean = true;
    
    private Countries: Country[];

    private CountryFormFilter:FormGroup;

    @Input() ActionTitle:string = 'Country List'

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fomBuilder:FormBuilder,
        private CountryService:CountryService,
    ) {}

    private id:number = +this.route.snapshot.params['id'];

    ngOnInit()
    { 
        if(!this.id)
        {
            this.buildForm();
            this.getCountries();
        }
    }
    
    private buildForm(): void 
    {
        this.CountryFormFilter = this.fomBuilder.group({
            term:this.fomBuilder.control(null,
            Validators.compose([Validators.required])
            )
        });
    }

    getCountries()
    {
        this.route.params.forEach((params: Params) => {
            this.selectedId = +params['id'];
            this.CountryService.getCountries().subscribe(
                        Countries => this.Countries = Countries,
                        error =>  this.errorMessage = <any>error  
                     );
        });
        
    }

    Deactivate(id)
    {
        let body = {'active':'0'};

        this.CountryService.putCountry(id,body)
            .subscribe(
                Countries =>this.getCountries(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Country deactivated successfuly';
                }
            );
    }

    Activate(id)
    {
        let body = {'active':'1'};

        this.CountryService.putCountry(id,body)
            .subscribe(
                Countries =>this.getCountries(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Country activated successfuly';
                }
            );
    }
}