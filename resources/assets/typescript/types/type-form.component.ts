import {Component, OnInit,EventEmitter} from "@angular/core";
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";

import { TypeService }         from './type.service';
import { PropertyTypes } from './type';

@Component({
    selector:'property-type-form',
    templateUrl:'./larangular/resources/assets/typescript/types/type-form.component.html',
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
    `],
    inputs:['TypeViewMode','IDPROPTYP','types'],
    outputs:['viewChanged','NoficationMsg']
})

export class TypeFormComponent implements OnInit{

    private IDPROPTYP:number;

    private ActionTitle:string

    private TypeViewMode:string;

    private errorMessage: string;

    private PropertyTypeForm:FormGroup;

    private types:any = new PropertyTypes();

    viewChanged = new EventEmitter<string>();

    NoficationMsg = new EventEmitter<string>();

    constructor(
        private _fomBuilder:FormBuilder,
        private TypeService: TypeService
    ){}


    ngOnInit()
    { 
        if(this.TypeViewMode =='new')
            this.ActionTitle  = 'Add new property type';
        this.ActionTitle      = 'Edit property type';
        this._buildForm(); 
        console.log(this.TypeViewMode);
      
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
            Validators.compose([Validators.required, Validators.minLength(60),
                                Validators.maxLength(250)])
            )
        })


        this.PropertyTypeForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }

    onSubmit()
    {
        if(this.TypeViewMode =='new')
        {
            this.newPropType();
        }
        else
        {
            this. putPropType();
        }
       
    }

    //add property type
    newPropType()
    {
        if (!this.PropertyTypeForm) { return; }
        this.TypeService.postPropType(this.PropertyTypeForm.value)
            .subscribe(
                types => this.types = types,
                error =>  this.errorMessage = <any>error,
                ()=>{
                     this.NoficationMsg.emit('Property type created successfuly')
                     this.viewChanged.emit('list')
                }
            );
    }

    //update property type
    putPropType()
    {
        this.TypeService.putPropType(this.IDPROPTYP,this.PropertyTypeForm.value)
            .subscribe(
                types => this.types = types,
                error =>  this.errorMessage = <any>error,  
                ()=>{
                     this.NoficationMsg.emit('Property type updated successfuly')
                     this.viewChanged.emit('list')
                }
            );
    }

    //show property type
    // showPropType()
    // {
    //     this._Service.getPropType(this.id)
    //         .subscribe(
    //             types => this.types = types,
    //             error =>  this.errorMessage = <any>error  
    //         );
    // }

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
    };

    ChangeView(event)
    {
        this.viewChanged.emit(event)
    }


}