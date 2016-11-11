import { Component, Input, Output, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { LoginService } from '../login/login.service';

class reset{
    email:string;
}

@Component({
    selector:'app-forgot-pass',
    templateUrl:'./larangular/resources/assets/typescript/auth/forgot/forgot.pass.html',
   
    styles:[`
        input[type=email].ng-valid,
        input[type=password].ng-valid{
            border-width: 2px;
            background-color: #FAFFBD;
        }

        input[type=email],
        input[type=password]
        {
            height: 45px;
            font-size: 110%;
            border-radius: 0px;
        }
        .error
        {
            color: #a94442;
            font-size: 105%;
        }
        input[type=submit]{
            color: #fff;
        }
        .has-error{ border-color: #a94442;}
        #rememberMe{
            position:relative;
            top:-5px;
        }
        #content{
            margin-top:5%;
            border: 10px solid;
        }
        form
        {
            padding:20px;
        }
    `],
})

export class ForgotPassComponent implements OnInit{

    private ForgotPass:FormGroup;

    private errorMessage:string;

    private successMessage:string;

    private email:any = new reset ();

    private ActionTitle:string = 'Password Recovery Process!'

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fomBuilder:FormBuilder,
        private LoginService:LoginService,
    ) {}

    private id:number = +this.route.snapshot.params['id'];

    ngOnInit()
    {
        this.buildForm();
    }
    
    private buildForm(): void 
    {
        this.ForgotPass = this.fomBuilder.group({
            email:this.fomBuilder.control(null,
            Validators.compose([Validators.required])
            )
        });


        this.ForgotPass.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); 
    }

    onValueChanged(data?: any) 
    {
        if (!this.ForgotPass) { return; }
        const form = this.ForgotPass;
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
    }

    validationMessages = 
    {
        'email': 
        {
            'required':   'E-Mail Address is required',
        },
    }
}