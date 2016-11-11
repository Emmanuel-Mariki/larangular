import { Component,OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Country } from './country';
import { CountryService } from './country.service';

@Component({
    selector:'prop-country-form',
    templateUrl:'./larangular/resources/assets/typescript/locations/countries/country.form.html',
    styles:[`
    
        input[type=text].ng-valid,
        select.ng-valid,
        input[type=number].ng-valid,
        textarea.ng-valid{
            border-width: 2px;
            background-color: #FAFFBD;
        }

        input[type=text],input[type=number],select{
            height: 45px;
            font-size: 110%;
        }
        textarea{
            min-height: 150px!important;
            font-size: 110%;
            max-width: 100% !important;
        }
        .panel-default>.panel-heading {
            color: #663663;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 200%;
        }

        label
        {
            color: #898;
            font-size: 120%
        }
        .error
        {
            color: #a94442;
            font-size: 105%;
        }
        input[type=submit]{
            color: #fff;
        }
        .has-error{    border-color: #a94442;}
    `]
})

 /**
 * name
 */
export class CountryFormComponent implements OnInit {

    private CountryForm:FormGroup;

    private errorMessage:string;

    private successMessage:string;

    private Country:any = new Country ();

    private ActionTitle:string = 'New Country List'

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fomBuilder:FormBuilder,
        private CountryService:CountryService,
    ) {}
    
    private id:number = +this.route.snapshot.params['id'];

    ngOnInit()
    {
        this.buildForm();
        if(this.id)
        {
            this.getCountry();
            this.ActionTitle = 'Edit Country'
        }
    }

    onSubmit()
    {
        if(!this.id)
        {
            this.postCountry();
        }
        else
        {
            this.putCountry();
        }
    }

    postCountry()
    {
        if (!this.CountryForm) { return; }
        this.CountryService.postCountry(this.CountryForm.value)
            .subscribe(
                Country => this.Country = Country,
                error =>  this.errorMessage = <any>error,
                ()=>{
                    this.successMessage = 'Country was created successfuly';
                    this.router.navigate(['../larangular/dashboard/countries']);
                }
            );
    }
    
    putCountry()
    {
        this.CountryService.putCountry(this.id,this.CountryForm.value)
            .subscribe(
                Country => this.Country = Country,
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Country updated successfuly';
                    this.router.navigate(['../larangular/dashboard/countries']);
                }
            );
    }

    getCountry()
    {
        this.CountryService.getCountry(this.id)
            .subscribe(
                Country => this.Country = Country,
                error =>  this.errorMessage = <any>error  
            );
    }
    
    private buildForm(): void 
    {
        this.CountryForm = this.fomBuilder.group({
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


        this.CountryForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) 
    {
        if (!this.CountryForm) { return; }
        const form = this.CountryForm;
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
            'required':   'Country name is required.',
            'minlength':  'Country name must be at least 3 characters long.',
            'maxlength':  'Country name cannot be more than 15 characters long.',
            'pattern':    'Country name can only contain alphabetical characters.'
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
}