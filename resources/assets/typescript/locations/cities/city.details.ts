import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";

import { City } from './city';
import { CityService } from './city.service';

@Component({
    selector:'City-details',
    templateUrl:'./larangular/resources/assets/typescript/locations/cities/city.details.html',
    styles:[`
        .panel-default>.panel-heading>.title
        {
            color: #663663;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 200%;
        }
        .panel-default>.panel-heading>.btn
        {
            position: relative;
            top: -5px;
            margin-left:5px;
        }
         .panel-default>.panel-body>form>.row>.col-md-12
        {
            padding:20px;
            border-bottom:1px solid #d3e0e9;
        }
         .panel-default>.panel-body>form>.row>.col-md-12>.row>.col-md-3
        {
                color: #898;
        }        
    `]
})

 /**
 * name
 */
export class CityDetailsComponent implements OnInit {

    private URL:string;

    private CityForm:FormGroup;

    private selectedId: number;

    private errorMessage: string;

    private successMessage:string;

    private Active:boolean = true;
    
    private City:any = new City();
    
    private ActionTitle:string = 'Edit City'

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
        if(this.id)
        {
            this.getCity();
            this.buildForm();
        }

        if(this.id && !this.name)
        {
            this.URL= '../larangular/dashboard/cities/Edit/'+this.id;
        }
        else if(this.id && this.name)
        {
            this.URL= '../larangular/dashboard/countries/'+this.name+'/cities/'+this.id;
        }
    }   
    onSubmit(body)
    {
        this.CityService.putCity(this.id,body)
            .subscribe(
                Category => this.getCity(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'City updated successfuly';
                }
            );
    }


    // postCity()
    // {
    //     if (!this.CityForm) { return; }
    //     this.CityService.postCity(this.CityForm.value)
    //         .subscribe(
    //             City => this.City = City,
    //             error =>  this.errorMessage = <any>error,
    //             ()=>{
    //                 this.successMessage = 'City was created successfuly';
    //                 this.router.navigate([this.URL]);
    //             }
    //         );
    // }
    
    putCity()
    {
        this.CityService.putCity(this.id,this.CityForm.value)
            .subscribe(
                City => this.City = City,
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'City updated successfuly';
                    this.router.navigate([this.URL]);
                }
            );
    }

    getCity()
    {
        this.CityService.getCity(this.id)
            .subscribe(
                City => this.City = City,
                error =>  this.errorMessage = <any>error  
            );
    }
    
    private buildForm(): void 
    {
        this.CityForm = this.fomBuilder.group({
            name:this.fomBuilder.control(null,
            Validators.compose([Validators.required, Validators.minLength(3),
                                Validators.maxLength(25)])
            ),
            priority:this.fomBuilder.control(null,
            Validators.compose([Validators.required,Validators.pattern('[0-9]+')])
            ),
            keywords:this.fomBuilder.control(null,
            Validators.compose([Validators.required, Validators.minLength(10),
                                Validators.maxLength(150)])
            ),
            url:this.fomBuilder.control(null,
            Validators.compose([Validators.required, Validators.minLength(3),
                                Validators.maxLength(200)])
            ),
            active:this.fomBuilder.control(null, Validators.required),
            descriptions:this.fomBuilder.control(null,
            Validators.compose([Validators.required, Validators.minLength(60),
                                Validators.maxLength(250)])
            )
        })


        this.CityForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) 
    {
        if (!this.CityForm) { return; }
        const form = this.CityForm;
        for (const field in this.formErrors) 
        {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) 
            {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = 
    {
        'name': '',
        'priority': '',
        'keywords':'',
        'active':'',
        'url':'',
        'descriptions':''
    }

    validationMessages = 
    {
        'name': 
        {
            'required':   'City name is required.',
            'minlength':  'City name must be at least 3 characters long.',
            'maxlength':  'City name cannot be more than 15 characters long.',
            'pattern':    'City name can only contain alphabetical characters.'
        },

        'priority': 
        {
            'required': 'Priority is required.',
            'pattern':  'Priority can only contain positive integers'
        },

        'keywords': 
        {
            'required':     'Keywords are required.',
            'minlength':    'Keywords must be at least 10 characters long.',
            'maxlength':    'Keywords cannot be more than 150 characters long.',
            'StringOnly':   'Keywords can only contain alphabetical characters.'
        },

        'active': 
        {
            'required': 'Active is required.',
            'pattern':  'Active can only contain positive integers'
        },

        'url': 
        {
            'required':   'Browser URL is required.',
            'minlength':  'Browser URL must be at least 3 characters long.',
            'maxlength':  'Browser URL cannot be more than 15 characters long.',
            'pattern':    'Browser URL only contain alphabetical characters.'
        },

        'descriptions': 
        {
            'required':     'Descriptions is required.',
            'minlength':    'Descriptions must be at least 60 characters long.',
            'maxlength':    'Descriptions cannot be more than 150 characters long.',
        },
    };

    formFields ={
        'url':'url',
        'name':'name',
        'active':'active',
        'priority':'priority',
        'keywords':'keywords',
        'descriptions':'descriptions'
    }

    setButtonClicked(clicked: string, ElementId) {
        if(!this.formErrors[ElementId])
        {
            this.formFields[ElementId] = clicked;
        }
    }
}