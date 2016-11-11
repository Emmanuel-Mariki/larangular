import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";

import { District } from './district';
import { DistrictService } from './district.service';

@Component({
    selector:'district-details',
    templateUrl:'./larangular/resources/assets/typescript/locations/districts/district.details.html',
    styles:[`
    `]
})

 /**
 * name
 */
export class DistrictDetailsComponent implements OnInit {

    private URL:string;

    private DistrictForm:FormGroup;

    private selectedId: number;

    private errorMessage: string;

    private successMessage:string;

    private Active:boolean = true;
    
    private District:any = new District();
    
    private ActionTitle:string = 'Edit district'

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fomBuilder:FormBuilder,
        private DistrictService:DistrictService,
    ) {}

    private id:number = +this.route.snapshot.params['id'];
    
    private name:string = this.route.snapshot.params['name'];

    ngOnInit()
    { 
        if(this.id)
        {
            this.getDistrict();
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
        this.DistrictService.putDistrict(this.id,body)
            .subscribe(
                Category => this.getDistrict(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'District updated successfuly';
                }
            );
    }


    // postDistrict()
    // {
    //     if (!this.DistrictForm) { return; }
    //     this.DistrictService.postDistrict(this.DistrictForm.value)
    //         .subscribe(
    //             District => this.District = District,
    //             error =>  this.errorMessage = <any>error,
    //             ()=>{
    //                 this.successMessage = 'District was created successfuly';
    //                 this.router.navigate([this.URL]);
    //             }
    //         );
    // }
    
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
                error =>  this.errorMessage = <any>error  
            );
    }
    
    private buildForm(): void 
    {
        this.DistrictForm = this.fomBuilder.group({
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