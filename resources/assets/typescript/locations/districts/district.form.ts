import { Component,OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { City } from '../cities/city';
import { Country } from '../countries/country';
import { District } from './district';
import { DistrictService } from './district.service';

@Component({
    selector:'prop-District-form',
    templateUrl:'./larangular/resources/assets/typescript/locations/districts/district.form.html',
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
export class DistrictFormComponent implements OnInit {

    private URL:string;

    private Cities:City[];

    private ReturnURL:string;

    private DistrictURL:string;

    private errorMessage:string;

    private Countries:Country[];

    private successMessage:string;

    private DistrictForm:FormGroup;

    private District:any = new District ();

    private ActionTitle:string = 'New District List'

    private selectedCity:string = this.District.city;

    private selectedCountry:string = this.District.country;

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
        this.getCountries();
        if(this.id)
        {
            this.getDistrict();
            this.ActionTitle = 'Edit District';
            this.selectedCity = this.District.city;
            console.log(this.Countries);
            console.log(this.selectedCity);
            //this.Cities = this.Countries[this.District.country_id].cities;
        }

        if(!this.name)
        {
            this.ReturnURL= '../larangular/dashboard/districts';
        }
    }

    onSubmit()
    {
        if(!this.id)
        {
            this.URL ='larangular/dashboard/districts';
            this.postDistrict();
        }
        else
        {
            this.putDistrict();
        }
    }

    BindCountry(country)
    {
        this.selectedCountry = this.Countries[country].name;
        this.Cities = this.Countries[country].cities;
    }

    BindCity(city:number)
    {
        this.selectedCity = this.Cities[city].name;
    }

    BuildUrl(event:any)
    {
        return this.DistrictURL = event.toLowerCase()
                                .replace(/\s+/g, '-')
                                .replace(/[^a-z0-9-]/ig,'');
    }

    getCountries()
    {
        this.DistrictService.getCountries()
            .subscribe(
                Countries => this.Countries = Countries,
                error =>  this.errorMessage = <any>error,
                ()=>{
                }
            );
    }

    postDistrict()
    {
        if (!this.DistrictForm) { return; }
        this.DistrictService.postDistrict(this.DistrictForm.value)
            .subscribe(
                District => this.District = District,
                error =>  this.errorMessage = <any>error,
                ()=>{
                    this.successMessage = 'District was created successfuly';
                    this.router.navigate([this.URL]);
                }
            );
    }
    
    putDistrict()
    {
        this.DistrictService.putDistrict(this.id,this.DistrictForm.value)
            .subscribe(
                District => this.District = District,
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'District updated successfuly';
                    this.router.navigate([this.URL]);
                }
            );
    }

    getDistrict()
    {
        this.DistrictService.getDistrict(this.id)
            .subscribe(
                District => this.District = District,
                error =>  this.errorMessage = <any>error,
                ()=>{
                    this.selectedCountry = this.District.country;
                    this.ReturnURL = this.District.url;
                }
            );
    }
    
    private buildForm(): void 
    {
        this.DistrictForm = this.fomBuilder.group({
            country_id:this.fomBuilder.control(null,Validators.required),
            country:this.fomBuilder.control({value:this.selectedCountry},
                                            Validators.required
            ),
            city_id:this.fomBuilder.control(null,Validators.required),
            city:this.fomBuilder.control({value:this.selectedCity},
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


        this.DistrictForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) 
    {
        if (!this.DistrictForm) { return; }
        const form = this.DistrictForm;
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
        'url':'',
        'city':'',
        'name': '',
        'active':'',
        'city_id':'',
        'country':'',
        'keywords':'',
        'priority': '',
        'country_id':'',
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
        'city_id': 
        {
            'required':   'City ID is required.',
        },
        'city': 
        {
            'required':   'City is required.',
        },
        'name': 
        {
            'required':   'District name is required.',
            'minlength':  'District name must be at least 3 characters long.',
            'maxlength':  'District name cannot be more than 15 characters long.',
            'pattern':    'District name can only contain alphabetical characters.'
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