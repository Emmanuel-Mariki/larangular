System.register(['@angular/core', "@angular/forms", '@angular/router', '../login/login.service'], function(exports_1, context_1) {
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
    var core_1, forms_1, router_1, login_service_1;
    var reset, ForgotPassComponent;
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
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            reset = (function () {
                function reset() {
                }
                return reset;
            }());
            ForgotPassComponent = (function () {
                function ForgotPassComponent(router, route, fomBuilder, LoginService) {
                    this.router = router;
                    this.route = route;
                    this.fomBuilder = fomBuilder;
                    this.LoginService = LoginService;
                    this.email = new reset();
                    this.ActionTitle = 'Password Recovery Process!';
                    this.id = +this.route.snapshot.params['id'];
                    this.formErrors = {
                        'email': '',
                    };
                    this.validationMessages = {
                        'email': {
                            'required': 'E-Mail Address is required',
                        },
                    };
                }
                ForgotPassComponent.prototype.ngOnInit = function () {
                    this.buildForm();
                };
                ForgotPassComponent.prototype.buildForm = function () {
                    var _this = this;
                    this.ForgotPass = this.fomBuilder.group({
                        email: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required]))
                    });
                    this.ForgotPass.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
                    this.onValueChanged();
                };
                ForgotPassComponent.prototype.onValueChanged = function (data) {
                    if (!this.ForgotPass) {
                        return;
                    }
                    var form = this.ForgotPass;
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
                ForgotPassComponent = __decorate([
                    core_1.Component({
                        selector: 'app-forgot-pass',
                        templateUrl: './larangular/resources/assets/typescript/auth/forgot/forgot.pass.html',
                        styles: ["\n        input[type=email].ng-valid,\n        input[type=password].ng-valid{\n            border-width: 2px;\n            background-color: #FAFFBD;\n        }\n\n        input[type=email],\n        input[type=password]\n        {\n            height: 45px;\n            font-size: 110%;\n            border-radius: 0px;\n        }\n        .error\n        {\n            color: #a94442;\n            font-size: 105%;\n        }\n        input[type=submit]{\n            color: #fff;\n        }\n        .has-error{ border-color: #a94442;}\n        #rememberMe{\n            position:relative;\n            top:-5px;\n        }\n        #content{\n            margin-top:5%;\n            border: 10px solid;\n        }\n        form\n        {\n            padding:20px;\n        }\n    "],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder, login_service_1.LoginService])
                ], ForgotPassComponent);
                return ForgotPassComponent;
            }());
            exports_1("ForgotPassComponent", ForgotPassComponent);
        }
    }
});
