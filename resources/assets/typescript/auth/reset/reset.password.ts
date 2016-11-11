import { Component, Input, Output, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Login } from '../login/log';
import { LoginService } from '../login/login.service';

@Component({
    selector:'app-login',
    templateUrl:'./larangular/resources/assets/typescript/auth/reset/reset.html',
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
        #rememberMe{
            position:relative;
            top:-5px;
        }
    `]
})

export class ResetPasswordComponent implements OnInit{

    private LoginForm:FormGroup;

    private errorMessage:string;

    private successMessage:string;

    private Login:any = new Login ();

    private ActionTitle:string = 'Peruzi Login!'

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fomBuilder:FormBuilder,
        private LoginService:LoginService
    ) {}

    private id:number = +this.route.snapshot.params['id'];

    ngOnInit()
    {
        this.buildForm();
    }
    
    private buildForm(): void 
    {
        this.LoginForm = this.fomBuilder.group({
            email:this.fomBuilder.control(null,
            Validators.compose([Validators.required])
            ),
            password:this.fomBuilder.control(null,
            Validators.compose([Validators.required])
            ),
            remember:this.fomBuilder.control(null)
        });


        this.LoginForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) 
    {
        if (!this.LoginForm) { return; }
        const form = this.LoginForm;
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
        'email':'',
        'password': '',
        'remember': '',
    }

    validationMessages = 
    {
        'email': 
        {
            'required':   'E-Mail Address is required',
        },
        'password': 
        {
            'required':   'password is required.',
        },

        'remember': 
        {
            'required': 'Priority is required.',
            'pattern':  'Priority can only contain positive integers'
        },
    }
}