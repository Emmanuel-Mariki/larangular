import {Component,Input,Output,EventEmitter,OnInit} from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";

import {TypeService} from './type.service'

import { PropertyTypes } from './type';

@Component({
    selector:'property-type-view',
    template:`
    <div class="col-lg-9" id="content">
        <div class="panel panel-default">
            <div class="panel-heading">
                <a [routerLink]="['../']" 
                    class="btn btn-success">
                   <i class="fa fa-list" aria-hidden="true"></i>
                </a>
                <span class="title">
                    {{PropType.name }} Details
                </span>
            </div>
            <div class="panel-body">
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
                                {{PropType.url}} 
                            </div>
                            <div class="col-md-1">
                                <i class="fa fa-pencil btn btn-success" 
                                   (click)="setButtonClicked('','url')"
                                  *ngIf="formFields.url =='url'"
                                   aria-hidden="true">
                                </i>
                                <button type="submit" class="btn btn-success"
                                    *ngIf="formFields.url ==''" 
                                    (click)="setButtonClicked('url','url'); 
                                    onSubmit({url:PropType.url})">
                                    <i class="fa fa-floppy-o" aria-hidden="true">
                                    </i>
                                </button>
                            </div>
                            <div class="form-group col-md-8 url-form" 
                                *ngIf="formFields.url ==''"
                                [ngClass]="{'has-error':formErrors.url, 
                                'has-success':PropertyTypeForm.controls['url'].valid}">
                                <input type="text" formControlName="url" 
                                [(ngModel)] ="PropType.url"
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
                                {{PropType.title}} 
                            </div>
                            <div class="col-md-1">
                                <i class="fa fa-pencil btn btn-success" 
                                   (click)="setButtonClicked('','title')"
                                  *ngIf="formFields.title =='title'"
                                   aria-hidden="true">
                                </i>
                                <button type="submit" class="btn btn-success"
                                    *ngIf="formFields.title ==''"
                                    (click)="setButtonClicked('title','title'); 
                                    onSubmit({title:PropType.title})">
                                    <i class="fa fa-floppy-o" aria-hidden="true">
                                    </i>
                                </button>
                            </div>
                            <div class="form-group col-md-8"
                                *ngIf="formFields.title ==''"
                                [ngClass]="{'has-error':formErrors.title, 
                                'has-success':PropertyTypeForm.controls['title'].valid}">
                                <input type="text" formControlName="title" value="PropType.title"
                                [(ngModel)] ="PropType.title" 
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
                                {{PropType.name}} 
                            </div>
                            <div class="col-md-1">
                                <i class="fa fa-pencil btn btn-success" 
                                   (click)="setButtonClicked('','name')"
                                  *ngIf="formFields.name =='name'"
                                   aria-hidden="true">
                                </i>
                                <button type="submit" class="btn btn-success"
                                    *ngIf="formFields.name ==''"
                                    (click)="setButtonClicked('name','name'); 
                                    onSubmit({name:PropType.name})">
                                    <i class="fa fa-floppy-o" aria-hidden="true">
                                    </i>
                                </button>
                            </div>
                            <div class="form-group col-md-8" *ngIf="formFields.name ==''"
                                [ngClass]="{'has-error':formErrors.name, 
                                'has-success':PropertyTypeForm.controls['name'].valid}">
                                <input type="text" formControlName="name" 
                                [(ngModel)] ="PropType.name"
                                class="form-control" id="name"/>
                                <span *ngIf="formErrors.name" class="help-block error">
                                    {{ formErrors.name }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-3">Active:</div>
                            <div class="col-md-8" [hidden]="visible">
                                <span *ngIf="PropType.active == Active"> Yes</span>
                                <span *ngIf="PropType.active == !Active"> No</span>
                            </div>
                            <div class="col-md-1">
                                <i *ngIf="PropType.active == Active" 
                                    style="cursor:pointer"
                                    (click)="Deactivate(PropType.id)"
                                    class="fa fa-eye" aria-hidden="true">
                                </i>
                                <i *ngIf="PropType.active == !Active" 
                                    style="cursor:pointer"
                                    (click)="Activate(PropType.id)"
                                    class="fa fa-remove" aria-hidden="true">
                                </i>
                            </div>
                            <div class="form-group col-md-8" [hidden]="!visible"
                                [ngClass]="{'has-error':formErrors.active, 
                                'has-success':PropertyTypeForm.controls['active'].valid}">
                                <input type="number" formControlName="active" 
                                [(ngModel)] ="PropType.active"
                                class="form-control disabled" id="active"/>
                                <span *ngIf="formErrors.active" class="help-block error">
                                    {{ formErrors.active }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-3">Priority:</div>
                            <div class="col-md-8" *ngIf="formFields.priority == 'priority'">
                                {{PropType.priority}} 
                            </div>
                            <div class="col-md-1">
                                <i class="fa fa-pencil btn btn-success" 
                                   (click)="setButtonClicked('','priority')"
                                  *ngIf="formFields.priority =='priority'"
                                   aria-hidden="true">
                                </i>
                                <button type="submit" class="btn btn-success"
                                    *ngIf="formFields.priority ==''"
                                    (click)="setButtonClicked('priority','priority'); 
                                    onSubmit({priority:PropType.priority})">
                                    <i class="fa fa-floppy-o" aria-hidden="true">
                                    </i>
                                </button>
                            </div>
                            <div class="form-group col-md-8" *ngIf="formFields.priority == ''"
                                [ngClass]="{'has-error':formErrors.priority, 
                                'has-success':PropertyTypeForm.controls['priority'].valid}">
                                <input type="number" formControlName="priority" 
                                [(ngModel)] ="PropType.priority"
                                class="form-control" id="priority"/>
                                <span *ngIf="formErrors.priority" class="help-block error">
                                    {{ formErrors.priority }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-3">Created:</div>
                            <div class="col-md-9">
                                {{PropType.created_at | date}}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-3">Updated:</div>
                            <div class="col-md-9">
                                {{PropType.updated_at | date}}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-3">Keywords:</div>
                            <div class="col-md-8" *ngIf="formFields.keywords == 'keywords'">
                                {{PropType.keywords}} 
                            </div>
                            <div class="col-md-1">
                                <i class="fa fa-pencil btn btn-success" 
                                   (click)="setButtonClicked('','keywords')"
                                  *ngIf="formFields.keywords =='keywords'"
                                   aria-hidden="true">
                                </i>
                                <button type="submit" class="btn btn-success"
                                    *ngIf="formFields.keywords ==''"
                                    (click)="setButtonClicked('keywords','keywords'); 
                                    onSubmit({keywords:PropType.keywords})">
                                    <i class="fa fa-floppy-o" aria-hidden="true">
                                    </i>
                                </button>
                            </div>
                            <div class="form-group col-md-8" *ngIf="formFields.keywords == ''"
                                [ngClass]="{'has-error':formErrors.keywords, 
                                'has-success':PropertyTypeForm.controls['keywords'].valid}">
                                <input type="text" formControlName="keywords" 
                                [(ngModel)] ="PropType.keywords"
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
                                {{PropType.descriptions}}
                            </div>
                            <div class="col-md-1">
                                <i class="fa fa-pencil btn btn-success" 
                                   (click)="setButtonClicked('','descriptions')"
                                  *ngIf="formFields.descriptions =='descriptions'"
                                   aria-hidden="true">
                                </i>
                                <button type="submit" class="btn btn-success"
                                    *ngIf="formFields.descriptions ==''"
                                    (click)="setButtonClicked('descriptions','descriptions'); 
                                    onSubmit({descriptions:PropType.descriptions})">
                                    <i class="fa fa-floppy-o" aria-hidden="true">
                                    </i>
                                </button>
                            </div>
                            <div class="form-group col-md-11"*ngIf="formFields.descriptions == ''"
                            [ngClass]="{'has-error':formErrors.descriptions, 
                            'has-success':PropertyTypeForm.controls['descriptions'].valid}">
                                <textarea class="form-control" id="descriptions" cols="10"
                                formControlName="descriptions"
                                [(ngModel)] ="PropType.descriptions"></textarea>
                                <span *ngIf="formErrors.descriptions" class="help-block error">
                                    {{ formErrors.descriptions }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </div>
    `,
    styles:[`
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

export class TypeViewComponent implements OnInit{

    constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _fomBuilder:FormBuilder,
    private service: TypeService) {}

    private Active:boolean = true;

    private errorMessage: string;

    private successMessage:string;

    @Input() visible: boolean = false;

    private PropertyTypeForm:FormGroup;
    
    private PropType: any = new PropertyTypes();

    private id:number = +this.route.snapshot.params['id'];


    ngOnInit()
    { 
        this._buildForm(); 
        this.showPropType();
    }

    onSubmit(body)
    {
        this.service.putPropType(this.id,body)
            .subscribe(
                PropType => this.showPropType(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Property type updated successfuly';
                    this.router.navigate(['../larangular/dashboard/property-types',this.id]);
                }
            );
    }

    private showPropType()
    {
        let id = +this.route.snapshot.params['id'];
        this.service.getPropType(id)
            .subscribe(
                PropType => this.PropType = PropType,
                error =>  this.errorMessage = <any>error  
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

    @Output() open: EventEmitter<any> = new EventEmitter();
    @Output() close: EventEmitter<any> = new EventEmitter();

    Deactivate(id)
    {
        let body = {'active':'0'};

        this.service.putPropType(id,body)
            .subscribe(
                PropTypes =>this.showPropType(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Property type deactivated successfuly';
                }
            );
    }

    Activate(id)
    {
        let body = {'active':'1'};

        this.service.putPropType(id,body)
            .subscribe(
                PropTypes =>this.showPropType(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Property type activated successfuly';
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