import { Component, Input, OnInit,EventEmitter } from '@angular/core';
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";
import {ActivatedRoute } from '@angular/router';

import { Login } from './log';
import { LoginService } from './login.service';

@Component({
    selector:'app-login',
    templateUrl:'./larangular/resources/assets/typescript/auth/login/login.html',
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

export class LoginComponent implements OnInit{

    private token:string;

    private LoginForm:FormGroup;

    private errorMessage:string;

    private successMessage:string;

    private Login:any = new Login ();

    private ActionTitle:string = 'Peruzi Login!'

    LoginRoute = new EventEmitter()

    constructor(
       // private router: Router,
        private route: ActivatedRoute,
        private fomBuilder:FormBuilder,
        private LoginService:LoginService
    ) {}

   // private id:number = +this.route.snapshot.params['id'];

    ngOnInit()
    {
        this.buildForm();
        localStorage.setItem('LoginRoute',this.route.snapshot.url[0].path)
        //console.log(this.route.snapshot.url[0].path)
    }

    onSubmit()
    {
       this.login();
    }

    login()
    {
        this.LoginService.getCredentials(this.LoginForm.value)
            .subscribe(
                Login => this.Login = Login,
                error =>  this.errorMessage = <any>error,
                ()=>{
                    //this.selectedCountry = this.Login.country;
                    //this.LoginURL = this.Login.url;
                }
            );
    }
    
    private buildForm(): void 
    {
        this.LoginForm = this.fomBuilder.group({
            email:this.fomBuilder.control(null,Validators.required),
            password:this.fomBuilder.control(null,Validators.required),
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
            'required': 'Remember is required.',
        },
    }

    // function emailValidator(field:any) {
    //     var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    //     if (!EMAIL_REGEXP.test(field.value)) {
    //         return {invalidEmail: true};
    //     }
    // }
}