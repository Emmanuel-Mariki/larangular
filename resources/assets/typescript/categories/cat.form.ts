import { Component,OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Category } from './category';
import { CatService } from './cat.service';
import { TypeService } from '../types/type.service';
import { PropertyTypes } from '../types/type';

@Component({
    selector:'prop-cat-form',
    templateUrl:'./larangular/resources/assets/typescript/categories/cat.form.html',
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
export class CatFormComponent implements OnInit {

    private CatForm:FormGroup;

    private errorMessage:string;

    private successMessage:string;

    private Types:PropertyTypes[];

    private Category:any = new Category ();

    private ActionTitle:string = 'New Category List'

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fomBuilder:FormBuilder,
        private TypeService:TypeService,
        private CateogoryService:CatService,
    ) {}
    
    private id:number = +this.route.snapshot.params['id'];

    ngOnInit()
    {
        this.buildForm();
        this.getTypes();
        if(this.id)
        {
            this.getCat();
            this.ActionTitle = 'Edit Category'
        }
    }

    onSubmit()
    {
        if(!this.id)
        {
            this.postCat();
        }
        else
        {
            this.putCat();
        }
    }

    postCat()
    {
        if (!this.CatForm) { return; }
        this.CateogoryService.postCategory(this.CatForm.value)
            .subscribe(
                Category => this.Category = Category,
                error =>  this.errorMessage = <any>error,
                ()=>{
                    this.successMessage = 'Property type category created successfuly';
                    this.router.navigate(['../larangular/dashboard/property-categories']);
                }
            );
    }
    
    putCat()
    {
        this.CateogoryService.putCategory(this.id,this.CatForm.value)
            .subscribe(
                Category => this.Category = Category,
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Property type updated successfuly';
                    this.router.navigate(['../larangular/dashboard/property-categories']);
                }
            );
    }

    getTypes()
    {
        this.TypeService.getPropTypes()
            .subscribe(
                Types => this.Types = Types,
                error =>  this.errorMessage = <any>error  
            );
    }

    getCat()
    {
        this.CateogoryService.getCategory(this.id)
            .subscribe(
                Category => this.Category = Category,
                error =>  this.errorMessage = <any>error  
            );
    }
    
    private buildForm(): void 
    {
        this.CatForm = this.fomBuilder.group({
            type_id:this.fomBuilder.control(null,
            Validators.compose([Validators.required])
            ),
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
            title:this.fomBuilder.control(null,
            Validators.compose([Validators.required, Validators.minLength(3),
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


        this.CatForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) 
    {
        if (!this.CatForm) { return; }
        const form = this.CatForm;
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
        'type_id':'',
        'name': '',
        'priority': '',
        'keywords':'',
        'active':'',
        'title':'',
        'url':'',
        'descriptions':''
    }

    validationMessages = 
    {
        'type_id': 
        {
            'required':   'Please select property type for this category.',
        },
        'name': 
        {
            'required':   'Property type name is required.',
            'minlength':  'Property type name must be at least 3 characters long.',
            'maxlength':  'Property type name cannot be more than 15 characters long.',
            'pattern':    'Property type name can only contain alphabetical characters.'
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

        'title': 
        {
            'required':   'Browser title is required.',
            'minlength':  'Browser title must be at least 3 characters long.',
            'maxlength':  'Browser title cannot be more than 15 characters long.',
            'pattern':    'Browser titlecan only contain alphabetical characters.'
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