System.register(['@angular/core', "@angular/forms", '@angular/router', './country', './country.service'], function(exports_1, context_1) {
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
    var core_1, forms_1, router_1, country_1, country_service_1;
    var CountryFormComponent;
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
            function (country_1_1) {
                country_1 = country_1_1;
            },
            function (country_service_1_1) {
                country_service_1 = country_service_1_1;
            }],
        execute: function() {
            CountryFormComponent = (function () {
                function CountryFormComponent(router, route, fomBuilder, CountryService) {
                    this.router = router;
                    this.route = route;
                    this.fomBuilder = fomBuilder;
                    this.CountryService = CountryService;
                    this.Country = new country_1.Country();
                    this.ActionTitle = 'New Country List';
                    this.id = +this.route.snapshot.params['id'];
                    this.formErrors = {
                        'name': '',
                        'priority': '',
                        'keywords': '',
                        'active': '',
                        'url': '',
                        'descriptions': ''
                    };
                    this.validationMessages = {
                        'name': {
                            'required': 'Country name is required.',
                            'minlength': 'Country name must be at least 3 characters long.',
                            'maxlength': 'Country name cannot be more than 15 characters long.',
                            'pattern': 'Country name can only contain alphabetical characters.'
                        },
                        'priority': {
                            'required': 'Priority is required.',
                            'pattern': 'Priority can only contain positive integers'
                        },
                        'keywords': {
                            'required': 'Keywords are required.',
                            'minlength': 'Keywords must be at least 10 characters long.',
                            'maxlength': 'Keywords cannot be more than 150 characters long.',
                            'StringOnly': 'Keywords can only contain alphabetical characters.'
                        },
                        'active': {
                            'required': 'Active is required.',
                            'pattern': 'Active can only contain positive integers'
                        },
                        'url': {
                            'required': 'Browser URL is required.',
                            'minlength': 'Browser URL must be at least 3 characters long.',
                            'maxlength': 'Browser URL cannot be more than 15 characters long.',
                            'pattern': 'Browser URL only contain alphabetical characters.'
                        },
                        'descriptions': {
                            'required': 'Descriptions is required.',
                            'minlength': 'Descriptions must be at least 60 characters long.',
                            'maxlength': 'Descriptions cannot be more than 150 characters long.',
                        },
                    };
                }
                CountryFormComponent.prototype.ngOnInit = function () {
                    this.buildForm();
                    if (this.id) {
                        this.getCountry();
                        this.ActionTitle = 'Edit Country';
                    }
                };
                CountryFormComponent.prototype.onSubmit = function () {
                    if (!this.id) {
                        this.postCountry();
                    }
                    else {
                        this.putCountry();
                    }
                };
                CountryFormComponent.prototype.postCountry = function () {
                    var _this = this;
                    if (!this.CountryForm) {
                        return;
                    }
                    this.CountryService.postCountry(this.CountryForm.value)
                        .subscribe(function (Country) { return _this.Country = Country; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Country was created successfuly';
                        _this.router.navigate(['../larangular/dashboard/countries']);
                    });
                };
                CountryFormComponent.prototype.putCountry = function () {
                    var _this = this;
                    this.CountryService.putCountry(this.id, this.CountryForm.value)
                        .subscribe(function (Country) { return _this.Country = Country; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Country updated successfuly';
                        _this.router.navigate(['../larangular/dashboard/countries']);
                    });
                };
                CountryFormComponent.prototype.getCountry = function () {
                    var _this = this;
                    this.CountryService.getCountry(this.id)
                        .subscribe(function (Country) { return _this.Country = Country; }, function (error) { return _this.errorMessage = error; });
                };
                CountryFormComponent.prototype.buildForm = function () {
                    var _this = this;
                    this.CountryForm = this.fomBuilder.group({
                        name: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3),
                            forms_1.Validators.maxLength(25)])),
                        priority: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('[0-9]+')])),
                        keywords: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(10),
                            forms_1.Validators.maxLength(150)])),
                        url: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3),
                            forms_1.Validators.maxLength(200)])),
                        active: this.fomBuilder.control(null, forms_1.Validators.required),
                        descriptions: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(60),
                            forms_1.Validators.maxLength(250)]))
                    });
                    this.CountryForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
                    this.onValueChanged(); // (re)set validation messages now
                };
                CountryFormComponent.prototype.onValueChanged = function (data) {
                    if (!this.CountryForm) {
                        return;
                    }
                    var form = this.CountryForm;
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
                CountryFormComponent = __decorate([
                    core_1.Component({
                        selector: 'prop-country-form',
                        templateUrl: './larangular/resources/assets/typescript/locations/country.form.html',
                        styles: ["\n    \n        input[type=text].ng-valid,\n        select.ng-valid,\n        input[type=number].ng-valid,\n        textarea.ng-valid{\n            border-width: 2px;\n            background-color: #FAFFBD;\n        }\n\n        input[type=text],input[type=number],select{\n            height: 45px;\n            font-size: 110%;\n        }\n        textarea{\n            min-height: 150px!important;\n            font-size: 110%;\n            max-width: 100% !important;\n        }\n        .panel-default>.panel-heading {\n            color: #663663;\n            font-family: Arial, Helvetica, sans-serif;\n            font-size: 200%;\n        }\n\n        label\n        {\n            color: #898;\n            font-size: 120%\n        }\n        .error\n        {\n            color: #a94442;\n            font-size: 105%;\n        }\n        input[type=submit]{\n            color: #fff;\n        }\n        .has-error{    border-color: #a94442;}\n    "]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder, country_service_1.CountryService])
                ], CountryFormComponent);
                return CountryFormComponent;
            }());
            exports_1("CountryFormComponent", CountryFormComponent);
        }
    }
});
