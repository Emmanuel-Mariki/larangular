import {Component,Input,Output,EventEmitter,OnInit} from "@angular/core";
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";

import {TypeService} from './type.service'

import { PropertyTypes } from './type';

@Component({
    selector:'property-type-view',
    template:`
    <div class="col-md-12" id="">
        <a class="btn" (click)="ChangeView('list')">
            <i class="fa fa-list" aria-hidden="true"></i>
        </a>
        <span class="title">
            {{type.name }} Details
        </span>
        <div class="alert alert-success" role="alert" *ngIf="successMessage">
            {{successMessage}}
        </div>
        <div class="alert alert-warning" role="alert" *ngIf="errorMessage">
            {{errorMessage}}
        </div>
        <form [formGroup]="PropertyTypeForm"  (ngSubmit)="onSubmit(PropertyTypeForm.value)" novalidate >
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-3">URL:</div>
                        <div class="col-md-8"  *ngIf="formFields.url =='url'">
                            {{type.url}} 
                        </div>
                        <div class="col-md-1">
                            <i class="fa fa-pencil btn" 
                                (click)="setButtonClicked('','url')"
                                *ngIf="formFields.url =='url'"
                                aria-hidden="true">
                            </i>
                            <button type="submit" class="btn save"
                                *ngIf="formFields.url ==''" 
                                (click)="setButtonClicked('url','url'); 
                                onSubmit({url:type.url})">
                                <i class="fa fa-floppy-o" aria-hidden="true">
                                </i>
                            </button>
                        </div>
                        <div class="form-group col-md-8 url-form" 
                            *ngIf="formFields.url ==''"
                            [ngClass]="{'has-error':formErrors.url, 
                            'has-success':PropertyTypeForm.controls['url'].valid}">
                            <input type="text" formControlName="url" 
                            [(ngModel)] ="type.url"
                            class="form-control" id="url"/>
                            <span *ngIf="formErrors.url" class="help-block error">
                                {{ formErrors.url }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-3">Title:</div>
                        <div class="col-md-8" *ngIf="formFields.title =='title'">
                            {{type.title}} 
                        </div>
                        <div class="col-md-1">
                            <i class="fa fa-pencil btn" 
                                (click)="setButtonClicked('','title')"
                                *ngIf="formFields.title =='title'"
                                aria-hidden="true">
                            </i>
                            <button type="submit" class="btn save"
                                *ngIf="formFields.title ==''"
                                (click)="setButtonClicked('title','title'); 
                                onSubmit({title:type.title})">
                                <i class="fa fa-floppy-o" aria-hidden="true">
                                </i>
                            </button>
                        </div>
                        <div class="form-group col-md-8"
                            *ngIf="formFields.title ==''"
                            [ngClass]="{'has-error':formErrors.title, 
                            'has-success':PropertyTypeForm.controls['title'].valid}">
                            <input type="text" formControlName="title" value="type.title"
                            [(ngModel)] ="type.title" 
                            class="form-control" id="title"/>
                            <span *ngIf="formErrors.title" class="help-block error">
                                {{ formErrors.title }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-3">Name:</div>
                        <div class="col-md-8" *ngIf="formFields.name =='name'">
                            {{type.name}} 
                        </div>
                        <div class="col-md-1">
                            <i class="fa fa-pencil btn" 
                                (click)="setButtonClicked('','name')"
                                *ngIf="formFields.name =='name'"
                                aria-hidden="true">
                            </i>
                            <button type="submit" class="btn save"
                                *ngIf="formFields.name ==''"
                                (click)="setButtonClicked('name','name'); 
                                onSubmit({name:type.name})">
                                <i class="fa fa-floppy-o" aria-hidden="true">
                                </i>
                            </button>
                        </div>
                        <div class="form-group col-md-8" *ngIf="formFields.name ==''"
                            [ngClass]="{'has-error':formErrors.name, 
                            'has-success':PropertyTypeForm.controls['name'].valid}">
                            <input type="text" formControlName="name" 
                            [(ngModel)] ="type.name"
                            class="form-control" id="name"/>
                            <span *ngIf="formErrors.name" class="help-block error">
                                {{ formErrors.name }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-3">Priority:</div>
                        <div class="col-md-8" *ngIf="formFields.priority == 'priority'">
                            {{type.priority}} 
                        </div>
                        <div class="col-md-1">
                            <i class="fa fa-pencil btn" 
                                (click)="setButtonClicked('','priority')"
                                *ngIf="formFields.priority =='priority'"
                                aria-hidden="true">
                            </i>
                            <button type="submit" class="btn save"
                                *ngIf="formFields.priority ==''"
                                (click)="setButtonClicked('priority','priority'); 
                                onSubmit({priority:type.priority})">
                                <i class="fa fa-floppy-o" aria-hidden="true">
                                </i>
                            </button>
                        </div>
                        <div class="form-group col-md-8" *ngIf="formFields.priority == ''"
                            [ngClass]="{'has-error':formErrors.priority, 
                            'has-success':PropertyTypeForm.controls['priority'].valid}">
                            <input type="number" formControlName="priority" 
                            [(ngModel)] ="type.priority"
                            class="form-control" id="priority"/>
                            <span *ngIf="formErrors.priority" class="help-block error">
                                {{ formErrors.priority }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-3">Keywords:</div>
                        <div class="col-md-8" *ngIf="formFields.keywords == 'keywords'">
                            {{type.keywords}} 
                        </div>
                        <div class="col-md-1">
                            <i class="fa fa-pencil btn" 
                                (click)="setButtonClicked('','keywords')"
                                *ngIf="formFields.keywords =='keywords'"
                                aria-hidden="true">
                            </i>
                            <button type="submit" class="btn save"
                                *ngIf="formFields.keywords ==''"
                                (click)="setButtonClicked('keywords','keywords'); 
                                onSubmit({keywords:type.keywords})">
                                <i class="fa fa-floppy-o" aria-hidden="true">
                                </i>
                            </button>
                        </div>
                        <div class="form-group col-md-8" *ngIf="formFields.keywords == ''"
                            [ngClass]="{'has-error':formErrors.keywords, 
                            'has-success':PropertyTypeForm.controls['keywords'].valid}">
                            <input type="text" formControlName="keywords" 
                            [(ngModel)] ="type.keywords"
                            class="form-control" id="keywords"/>
                            <span *ngIf="formErrors.keywords" class="help-block error">
                                {{ formErrors.keywords }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-3" *ngIf="formFields.descriptions == 'descriptions'">
                        Descriptions:</div>
                        <div class="col-md-8" *ngIf="formFields.descriptions == 'descriptions'">
                            {{type.descriptions}}
                        </div>
                        <div class="col-md-1">
                            <i class="fa fa-pencil btn" 
                                (click)="setButtonClicked('','descriptions')"
                                *ngIf="formFields.descriptions =='descriptions'"
                                aria-hidden="true">
                            </i>
                            <button type="submit" class="btn save"
                                *ngIf="formFields.descriptions ==''"
                                (click)="setButtonClicked('descriptions','descriptions'); 
                                onSubmit({descriptions:type.descriptions})">
                                <i class="fa fa-floppy-o" aria-hidden="true">
                                </i>
                            </button>
                        </div>
                        <div class="form-group col-md-11"*ngIf="formFields.descriptions == ''"
                        [ngClass]="{'has-error':formErrors.descriptions, 
                        'has-success':PropertyTypeForm.controls['descriptions'].valid}">
                            <textarea class="form-control" id="descriptions" cols="10"
                            formControlName="descriptions"
                            [(ngModel)] ="type.descriptions"></textarea>
                            <span *ngIf="formErrors.descriptions" class="help-block error">
                                {{ formErrors.descriptions }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-3">Created:</div>
                        <div class="col-md-9">
                            {{type.created_at | date}}
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-3">Updated:</div>
                        <div class="col-md-9">
                            {{type.updated_at | date}}
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-3">Active:</div>
                        <div class="col-md-8" [hidden]="visible">
                            <span *ngIf="type.active == '1'"> Yes</span>
                            <span *ngIf="type.active == '0'"> No</span>
                        </div>
                        <div class="col-md-1">
                            <i *ngIf="type.active == '1'" 
                                style="cursor:pointer"
                                (click)="Deactivate(type.IDPROPTYP)"
                                class="fa fa-check" aria-hidden="true">
                            </i>
                            <i *ngIf="type.active == '0'" 
                                style="cursor:pointer"
                                (click)="Activate(type.IDPROPTYP)"
                                class="fa fa-remove" aria-hidden="true">
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    `,
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
        .has-error{border-color: #a94442;}
        .btn{margin-top:15px; margin-bottom:15px;}
        form
        {
            margin-left:15px;
            margin-right:15px;
        }
        .col-md-12
        {
            border-top: 1px solid;
            border-color: #DCDCDC;
            padding-top:10px;
            padding-bottom:10px;
        }
        .col-md-3
        {
            font-weight: 800;
            color: #999;
        }
        .save
        {
            position:relative;
            top:-7px;
        }
    `],
    inputs:['type','IDPROPTYP'],
    outputs:['viewChanged']
})

export class TypeViewComponent implements OnInit{

    private type:any;

    private IDPROPTYP:number;

    constructor(
        private _fomBuilder:FormBuilder,
        private TypeService: TypeService
    ) {}

    private errorMessage: string;

    private successMessage:string;

    viewChanged = new EventEmitter<string>();

    private PropertyTypeForm:FormGroup;
    
    private PropType: any = new PropertyTypes();


    ngOnInit()
    { 
        this._buildForm(); 
    }

    ChangeView(event)
    {
        this.viewChanged.emit(event);
    }

    onSubmit(body)
    {
        this.TypeService.putPropType(this.IDPROPTYP,body)
            .subscribe(
                type => this.type,
                error =>  this.errorMessage = <any>error,  
                ()=>{
                }
            );
    }
    private _buildForm(): void 
    {
        this.PropertyTypeForm = this._fomBuilder.group({
            name:this._fomBuilder.control(null,
            Validators.compose([Validators.required, Validators.minLength(3),
                                Validators.maxLength(15)])
            ),
            priority:this._fomBuilder.control(null,
            Validators.compose([Validators.required,Validators.pattern('[0-9]+')])
            ),
            keywords:this._fomBuilder.control(null,
            Validators.compose([Validators.required, Validators.minLength(10),
                                Validators.maxLength(100)])
            ),
            title:this._fomBuilder.control(null,
            Validators.compose([Validators.required, Validators.minLength(3),
                                Validators.maxLength(150)])
            ),
            url:this._fomBuilder.control(null,
            Validators.compose([Validators.required, Validators.minLength(3),
                                Validators.maxLength(200)])
            ),
            active:this._fomBuilder.control(null, Validators.required),
            descriptions:this._fomBuilder.control(null,
            Validators.compose([Validators.required, Validators.minLength(50),
                                Validators.maxLength(250)])
            )
        })


        this.PropertyTypeForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) 
    {
        if (!this.PropertyTypeForm) { return; }
        const form = this.PropertyTypeForm;
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
        'title':'',
        'url':'',
        'descriptions':''
    }

    validationMessages = 
    {
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
    }

    Deactivate(id)
    {
        let body = {'active':'0'};

        this.TypeService.putPropType(this.IDPROPTYP,body)
            .subscribe(
                type =>this.type,
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Property type deactivated successfuly';
                    console.log(this.type.active)
                }
            );
    }

    Activate(id)
    {
        let body = {'active':'1'};

        this.TypeService.putPropType(this.IDPROPTYP,body)
            .subscribe(
                type =>this.type,
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Property type activated successfuly';
                    console.log(this.type.active)
                }
            );
    }
    formFields ={
        'active':'active',
        'priority':'priority',
        'url':'url',
        'title':'title',
        'name':'name',
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