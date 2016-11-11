import { Component,OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";

import { District } from './district';
import { DistrictService } from './district.service';

@Component({
    selector:'district-list',
    templateUrl:'./larangular/resources/assets/typescript/locations/districts/district.list.html',
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
export class DistrictListComponent implements OnInit {

    @Input() term:string ='';
    
    private selectedId: number;

    private errorMessage: string;

    private successMessage:string;

    private Active:boolean = true;
    
    private Districts: District[];

    private DistrictFormFilter:FormGroup;

    @Input() ActionTitle:string = 'District List'

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fomBuilder:FormBuilder,
        private DistrictService:DistrictService
    ) {}

    private id:number = +this.route.snapshot.params['id'];

    private name:string = this.route.snapshot.params['name'];

    ngOnInit()
    { 
        this.buildForm();
        if(!this.id && !this.name)
        {
            this.getDistricts();
        }
    }
    
    private buildForm(): void 
    {
        this.DistrictFormFilter = this.fomBuilder.group({
            term:this.fomBuilder.control(null,
            Validators.compose([Validators.required])
            )
        });
    }

    getDistricts()
    {
        this.route.params.forEach((params: Params) => {
            this.selectedId = +params['id'];
            this.DistrictService.getDistricts().subscribe(
                        Districts => this.Districts = Districts,
                        error =>  this.errorMessage = <any>error  
                     );
        });
        
    }

    Deactivate(id)
    {
        let body = {'active':'0'};

        this.DistrictService.putDistrict(id,body)
            .subscribe(
                Districts =>this.getDistricts(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'District deactivated successfuly';
                }
            );
    }

    Activate(id)
    {
        let body = {'active':'1'};

        this.DistrictService.putDistrict(id,body)
            .subscribe(
                Districts =>this.getDistricts(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'District activated successfuly';
                }
            );
    }
}