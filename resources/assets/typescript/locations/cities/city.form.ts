import { Component,OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { City } from './city';
import { Country } from '../countries/country';
import { CityService } from './city.service';

@Component({
    selector:'prop-City-form',
    templateUrl:'./larangular/resources/assets/typescript/locations/cities/city.form.html',
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
export class CityFormComponent implements OnInit {

    private URL:string;

    private CityForm:FormGroup;

    private errorMessage:string;

    private Countries:Country[];

    private successMessage:string;

    private City:any = new City ();

    private CityURL:string = this.City.name

    private ActionTitle:string = 'New City List'

    private selectedCountry:string = this.City.country;

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
        this.getCountries();
        if(this.id)
        {
            this.getCity();
            this.ActionTitle = 'Edit City';
            console.log( this.CityURL);
        }

        if(!this.name)
        {
            this.URL= '../larangular/dashboard/cities';
        }
        else
        {
            this.URL= '../larangular/dashboard/countries/'+this.name+'/cities';
        }

    }

    onSubmit()
    {
          if(!this.id)
          {
              this.postCity();
          }
          else
          {
              this.putCity();
          }
    }

    BindCountry(country)
    {
       return  this.selectedCountry = this.Countries[country].name;
    }

    BuildUrl(event:any)
    {
        return this.CityURL = event.toLowerCase()
                                .replace(/\s+/g, '-')
                                .replace(/[^a-z0-9-]/ig,'');
    }

    getCountries()
    {
        this.CityService.getCountries()
            .subscribe(
                Countries => this.Countries = Countries,
                error =>  this.errorMessage = <any>error  
            );
    }

    postCity()
    {
        if (!this.CityForm) { return; }
        this.CityService.postCity(this.CityForm.value)
            .subscribe(
                City => this.City = City,
                error =>  this.errorMessage = <any>error,
                ()=>{
                    this.successMessage = 'City was created successfuly';
                    this.router.navigate([this.URL]);
                }
            );
    }
    
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
                error =>  this.errorMessage = <any>error,
                ()=>{
                    this.selectedCountry = this.City.country;
                    this.CityURL = this.City.url;
                }
            );
    }
    
    private buildForm(): void 
    {
        this.CityForm = this.fomBuilder.group({
            country_id:this.fomBuilder.control(null,Validators.required),
            country:this.fomBuilder.control({value:this.selectedCountry},
                                            Validators.required
            ),
            name:this.fomBuilder.control(null,
            Validators.compose([Validators.required, Validators.minLength(3),
                                Validators.maxLength(25)])
            ),
            priority:this.fomBuilder.control(null,
            Validators.compose([Validators.required,Validators.pattern('[0-9]+')])
            ),
            keywords:this.fomBuilder.control(null,
            Validators.compose([Validators.minLength(10),Validators.maxLength(150)])
            ),
            url:this.fomBuilder.control(null,
            Validators.compose([Validators.required, Validators.minLength(3),
                                Validators.maxLength(200)])
            ),
            active:this.fomBuilder.control(null, Validators.required),
            descriptions:this.fomBuilder.control(null,
            Validators.compose([Validators.minLength(60),Validators.maxLength(250)])
            ),
        });


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
        'country_id':'',
        'country':'',
        'name': '',
        'priority': '',
        'keywords':'',
        'active':'',
        'url':'',
        'descriptions':''
    }

    validationMessages = 
    {
        'country_id': 
        {
            'required':   'Country ID is required.',
        },
        'country': 
        {
            'required':   'Country is required.',
        },
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
}