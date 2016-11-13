System.register(["@angular/core", "@angular/forms", "@angular/router", "./city", "./city.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, router_1, city_1, city_service_1, CityFormComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (city_1_1) {
                city_1 = city_1_1;
            },
            function (city_service_1_1) {
                city_service_1 = city_service_1_1;
            }
        ],
        execute: function () {
            /**
            * name
            */
            CityFormComponent = (function () {
                function CityFormComponent(router, route, fomBuilder, CityService) {
                    this.router = router;
                    this.route = route;
                    this.fomBuilder = fomBuilder;
                    this.CityService = CityService;
                    this.City = new city_1.City();
                    this.CityURL = this.City.name;
                    this.ActionTitle = 'New City List';
                    this.selectedCountry = this.City.country;
                    this.id = +this.route.snapshot.params['id'];
                    this.name = this.route.snapshot.params['name'];
                    this.formErrors = {
                        'country_id': '',
                        'country': '',
                        'name': '',
                        'priority': '',
                        'keywords': '',
                        'active': '',
                        'url': '',
                        'descriptions': ''
                    };
                    this.validationMessages = {
                        'country_id': {
                            'required': 'Country ID is required.',
                        },
                        'country': {
                            'required': 'Country is required.',
                        },
                        'name': {
                            'required': 'City name is required.',
                            'minlength': 'City name must be at least 3 characters long.',
                            'maxlength': 'City name cannot be more than 15 characters long.',
                            'pattern': 'City name can only contain alphabetical characters.'
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
                CityFormComponent.prototype.ngOnInit = function () {
                    this.buildForm();
                    this.getCountries();
                    if (this.id) {
                        this.getCity();
                        this.ActionTitle = 'Edit City';
                        console.log(this.CityURL);
                    }
                    if (!this.name) {
                        this.URL = '../larangular/dashboard/cities';
                    }
                    else {
                        this.URL = '../larangular/dashboard/countries/' + this.name + '/cities';
                    }
                };
                CityFormComponent.prototype.onSubmit = function () {
                    if (!this.id) {
                        this.postCity();
                    }
                    else {
                        this.putCity();
                    }
                };
                CityFormComponent.prototype.BindCountry = function (country) {
                    return this.selectedCountry = this.Countries[country].name;
                };
                CityFormComponent.prototype.BuildUrl = function (event) {
                    return this.CityURL = event.toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/[^a-z0-9-]/ig, '');
                };
                CityFormComponent.prototype.getCountries = function () {
                    var _this = this;
                    this.CityService.getCountries()
                        .subscribe(function (Countries) { return _this.Countries = Countries; }, function (error) { return _this.errorMessage = error; });
                };
                CityFormComponent.prototype.postCity = function () {
                    var _this = this;
                    if (!this.CityForm) {
                        return;
                    }
                    this.CityService.postCity(this.CityForm.value)
                        .subscribe(function (City) { return _this.City = City; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'City was created successfuly';
                        _this.router.navigate([_this.URL]);
                    });
                };
                CityFormComponent.prototype.putCity = function () {
                    var _this = this;
                    this.CityService.putCity(this.id, this.CityForm.value)
                        .subscribe(function (City) { return _this.City = City; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'City updated successfuly';
                        _this.router.navigate([_this.URL]);
                    });
                };
                CityFormComponent.prototype.getCity = function () {
                    var _this = this;
                    this.CityService.getCity(this.id)
                        .subscribe(function (City) { return _this.City = City; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.selectedCountry = _this.City.country;
                        _this.CityURL = _this.City.url;
                    });
                };
                CityFormComponent.prototype.buildForm = function () {
                    var _this = this;
                    this.CityForm = this.fomBuilder.group({
                        country_id: this.fomBuilder.control(null, forms_1.Validators.required),
                        country: this.fomBuilder.control({ value: this.selectedCountry }, forms_1.Validators.required),
                        name: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3),
                            forms_1.Validators.maxLength(25)])),
                        priority: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('[0-9]+')])),
                        keywords: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.minLength(10), forms_1.Validators.maxLength(150)])),
                        url: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3),
                            forms_1.Validators.maxLength(200)])),
                        active: this.fomBuilder.control(null, forms_1.Validators.required),
                        descriptions: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.minLength(60), forms_1.Validators.maxLength(250)])),
                    });
                    this.CityForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
                    this.onValueChanged(); // (re)set validation messages now
                };
                CityFormComponent.prototype.onValueChanged = function (data) {
                    if (!this.CityForm) {
                        return;
                    }
                    var form = this.CityForm;
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
                return CityFormComponent;
            }());
            CityFormComponent = __decorate([
                core_1.Component({
                    selector: 'prop-City-form',
                    templateUrl: './larangular/resources/assets/typescript/locations/cities/city.form.html',
                    styles: ["\n    \n        input[type=text].ng-valid,\n        select.ng-valid,\n        input[type=number].ng-valid,\n        textarea.ng-valid{\n            border-width: 2px;\n            background-color: #FAFFBD;\n        }\n\n        input[type=text],input[type=number],select{\n            height: 45px;\n            font-size: 110%;\n        }\n        textarea{\n            min-height: 150px!important;\n            font-size: 110%;\n            max-width: 100% !important;\n        }\n        .panel-default>.panel-heading {\n            color: #663663;\n            font-family: Arial, Helvetica, sans-serif;\n            font-size: 200%;\n        }\n\n        label\n        {\n            color: #898;\n            font-size: 120%\n        }\n        .error\n        {\n            color: #a94442;\n            font-size: 105%;\n        }\n        input[type=submit]{\n            color: #fff;\n        }\n        .has-error{    border-color: #a94442;}\n    "]
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    router_1.ActivatedRoute,
                    forms_1.FormBuilder,
                    city_service_1.CityService])
            ], CityFormComponent);
            exports_1("CityFormComponent", CityFormComponent);
        }
    };
});
