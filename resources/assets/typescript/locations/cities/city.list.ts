import { Component,OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";

import { City } from './city';
import { CityService } from './city.service';

@Component({
    selector:'city-list',
    templateUrl:'./larangular/resources/assets/typescript/locations/cities/city.list.html',
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
export class CityListComponent implements OnInit {

    @Input() term:any ='';
    
    private selectedId: number;

    private errorMessage: string;

    private successMessage:string;

    private Active:boolean = true;
    
    private Cities: City[];

    private CityFormFilter:FormGroup;

    @Input() ActionTitle:string = 'City List'

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fomBuilder:FormBuilder,
        private CityService:CityService,
    ) {}

    private id:number = +this.route.snapshot.params['id'];

    private name:string = this.route.snapshot.params['name'];

    ngOnInit()
    { 
        this.buildForm();
        if(!this.id && !this.name)
        {
            this.getCities();
        }
        else if(this.name)
        {
            this.getCountryCities();
        }
    }
    
    private buildForm(): void 
    {
        this.CityFormFilter = this.fomBuilder.group({
            term:this.fomBuilder.control(null,
            Validators.compose([Validators.required])
            )
        });
    }

    getCities()
    {
        this.route.params.forEach((params: Params) => {
            this.selectedId = +params['id'];
            this.CityService.getCities().subscribe(
                        Cities => this.Cities = Cities,
                        error =>  this.errorMessage = <any>error  
                     );
        });
        
    }

    getCountryCities()
    {
        this.route.params.forEach((params: Params) => {
            this.selectedId = +params['id'];
            this.CityService.getCountryCities(this.name).subscribe(
                        Cities => this.Cities = Cities,
                        error =>  this.errorMessage = <any>error  
                     );
        });
        
    }

    Deactivate(id)
    {
        let body = {'active':'0'};

        this.CityService.putCity(id,body)
            .subscribe(
                Cities =>this.getCities(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'City deactivated successfuly';
                }
            );
    }

    Activate(id)
    {
        let body = {'active':'1'};

        this.CityService.putCity(id,body)
            .subscribe(
                Cities =>this.getCities(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'City activated successfuly';
                }
            );
    }
}