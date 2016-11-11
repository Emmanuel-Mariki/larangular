import { Component, Input, Output, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';


import { RegisterService } from './register.service';

class register
{
    //name:string;
    email:string;
    password:string;
    password_confirmation:string;
}

@Component({
    selector:'app-register',
    templateUrl:'./larangular/resources/assets/typescript/auth/register/register.html',
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

export class RegisterComponent implements OnInit{

    private RegisterForm:FormGroup;

    private errorMessage:string;

    private successMessage:string;

    private Register:any = new register ();

    private ActionTitle:string = 'Register With Peruzi!'

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fomBuilder:FormBuilder,
        private RegisterService:RegisterService,
    ) {}

    private id:number = +this.route.snapshot.params['id'];

    ngOnInit()
    {
        this.buildForm();
    }

    onSubmit()
    {
        if (!this.RegisterForm) { return; }
        this.RegisterService.postRegister(this.RegisterForm.value)
            .subscribe(
                Register => this.Register = Register,
                error =>  this.errorMessage = <any>error,
                ()=>{
                   //send activation email and redirect to home with flash message 
                }
            );
    }
    
    private buildForm(): void 
    {
        this.RegisterForm = this.fomBuilder.group({
            email:this.fomBuilder.control(null,
            Validators.compose([Validators.required])
            ),
            password:this.fomBuilder.control(null,
            Validators.compose([Validators.required,Validators.minLength(6),
                                Validators.maxLength(50)])
            ),
            password_confirmation:this.fomBuilder.control(null,
            Validators.compose([Validators.required,Validators.minLength(6),
                                Validators.maxLength(50)]))
        });


        this.RegisterForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) 
    {
        if (!this.RegisterForm) { return; }
        const form = this.RegisterForm;
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
        'password_confirmation':'',
    }

    validationMessages = 
    {
        'email': 
        {
            'required':   'E-Mail Address is required',
        },
        'password': 
        {
            'required':   'Password is required.',  
            'minlength':  'Password must be at least 6 characters long.',
            'maxlength':  'Password cannot be more than 150 characters long.',
        },
        'password_confirmation':
        { 
            'required': 'Password Confirmation is required.',
            'minlength':  'Password Confirmation must be at least 6 characters long.',
            'maxlength':  'Password Confirmation cannot be more than 150 characters long.',
        }
    }
}