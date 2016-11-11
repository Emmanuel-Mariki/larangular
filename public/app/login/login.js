System.register(['@angular/core', "@angular/forms", '@angular/router', './log', './login.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1, router_1, log_1, login_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (log_1_1) {
                log_1 = log_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(router, route, fomBuilder, LoginService) {
                    this.router = router;
                    this.route = route;
                    this.fomBuilder = fomBuilder;
                    this.LoginService = LoginService;
                    this.Login = new log_1.Login();
                    this.ActionTitle = 'Peruzi Login!';
                    this.id = +this.route.snapshot.params['id'];
                    this.formErrors = {
                        'email': '',
                        'password': '',
                        'remember': '',
                    };
                    this.validationMessages = {
                        'email': {
                            'required': 'E-Mail Address is required',
                        },
                        'password': {
                            'required': 'password is required.',
                        },
                        'remember': {
                            'required': 'Remember is required.',
                        },
                    };
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.buildForm();
                };
                LoginComponent.prototype.onSubmit = function () {
                    this.login();
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.LoginService.getCredentials(this.LoginForm.value)
                        .subscribe(function (Login) { return _this.Login = Login; }, function (error) { return _this.errorMessage = error; }, function () {
                        //this.selectedCountry = this.Login.country;
                        //this.LoginURL = this.Login.url;
                    });
                };
                LoginComponent.prototype.buildForm = function () {
                    var _this = this;
                    this.LoginForm = this.fomBuilder.group({
                        email: this.fomBuilder.control(null, forms_1.Validators.required),
                        password: this.fomBuilder.control(null, forms_1.Validators.required),
                        remember: this.fomBuilder.control(null)
                    });
                    this.LoginForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
                    this.onValueChanged(); // (re)set validation messages now
                };
                LoginComponent.prototype.onValueChanged = function (data) {
                    if (!this.LoginForm) {
                        return;
                    }
                    var form = this.LoginForm;
                    for (var field in this.formErrors) {
                        // clear previous error message (if any)
                        this.formErrors[field] = '';
                        var control = form.get(field);
                        if (control && control.dirty && !control.valid) {
                            var messages = this.validationMessages[field];
                            for (var key in control.errors) {
                                this.formErrors[field] += messages[key] + ' ';
                            }
                        }
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'app-login',
                        templateUrl: './larangular/resources/assets/typescript/auth/login/login.html',
                        styles: ["\n        input[type=text].ng-valid,\n        select.ng-valid,\n        input[type=number].ng-valid,\n        textarea.ng-valid{\n            border-width: 2px;\n            background-color: #FAFFBD;\n        }\n\n        input[type=text],input[type=number],select{\n            height: 45px;\n            font-size: 110%;\n        }\n        textarea{\n            min-height: 150px!important;\n            font-size: 110%;\n            max-width: 100% !important;\n        }\n\n        label\n        {\n            color: #898;\n            font-size: 120%\n        }\n        .error\n        {\n            color: #a94442;\n            font-size: 105%;\n        }\n        input[type=submit]{\n            color: #fff;\n        }\n        .has-error{    border-color: #a94442;}\n        #rememberMe{\n            position:relative;\n            top:-5px;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder, login_service_1.LoginService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
