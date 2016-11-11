System.register(['@angular/core', "@angular/forms", '@angular/router', './district', './district.service'], function(exports_1, context_1) {
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
    var core_1, forms_1, router_1, district_1, district_service_1;
    var DistrictFormComponent;
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
            function (district_1_1) {
                district_1 = district_1_1;
            },
            function (district_service_1_1) {
                district_service_1 = district_service_1_1;
            }],
        execute: function() {
            DistrictFormComponent = (function () {
                function DistrictFormComponent(router, route, fomBuilder, DistrictService) {
                    this.router = router;
                    this.route = route;
                    this.fomBuilder = fomBuilder;
                    this.DistrictService = DistrictService;
                    this.District = new district_1.District();
                    this.ActionTitle = 'New District List';
                    this.selectedCity = this.District.city;
                    this.selectedCountry = this.District.country;
                    this.id = +this.route.snapshot.params['id'];
                    this.name = this.route.snapshot.params['name'];
                    this.formErrors = {
                        'url': '',
                        'city': '',
                        'name': '',
                        'active': '',
                        'city_id': '',
                        'country': '',
                        'keywords': '',
                        'priority': '',
                        'country_id': '',
                        'descriptions': ''
                    };
                    this.validationMessages = {
                        'country_id': {
                            'required': 'Country ID is required.',
                        },
                        'country': {
                            'required': 'Country is required.',
                        },
                        'city_id': {
                            'required': 'City ID is required.',
                        },
                        'city': {
                            'required': 'City is required.',
                        },
                        'name': {
                            'required': 'District name is required.',
                            'minlength': 'District name must be at least 3 characters long.',
                            'maxlength': 'District name cannot be more than 15 characters long.',
                            'pattern': 'District name can only contain alphabetical characters.'
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
                DistrictFormComponent.prototype.ngOnInit = function () {
                    this.buildForm();
                    this.getCountries();
                    if (this.id) {
                        this.getDistrict();
                        this.ActionTitle = 'Edit District';
                        this.selectedCity = this.District.city;
                        console.log(this.Countries);
                        console.log(this.selectedCity);
                    }
                    if (!this.name) {
                        this.ReturnURL = '../larangular/dashboard/districts';
                    }
                };
                DistrictFormComponent.prototype.onSubmit = function () {
                    if (!this.id) {
                        this.URL = 'larangular/dashboard/districts';
                        this.postDistrict();
                    }
                    else {
                        this.putDistrict();
                    }
                };
                DistrictFormComponent.prototype.BindCountry = function (country) {
                    this.selectedCountry = this.Countries[country].name;
                    this.Cities = this.Countries[country].cities;
                };
                DistrictFormComponent.prototype.BindCity = function (city) {
                    this.selectedCity = this.Cities[city].name;
                };
                DistrictFormComponent.prototype.BuildUrl = function (event) {
                    return this.DistrictURL = event.toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/[^a-z0-9-]/ig, '');
                };
                DistrictFormComponent.prototype.getCountries = function () {
                    var _this = this;
                    this.DistrictService.getCountries()
                        .subscribe(function (Countries) { return _this.Countries = Countries; }, function (error) { return _this.errorMessage = error; }, function () {
                    });
                };
                DistrictFormComponent.prototype.postDistrict = function () {
                    var _this = this;
                    if (!this.DistrictForm) {
                        return;
                    }
                    this.DistrictService.postDistrict(this.DistrictForm.value)
                        .subscribe(function (District) { return _this.District = District; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'District was created successfuly';
                        _this.router.navigate([_this.URL]);
                    });
                };
                DistrictFormComponent.prototype.putDistrict = function () {
                    var _this = this;
                    this.DistrictService.putDistrict(this.id, this.DistrictForm.value)
                        .subscribe(function (District) { return _this.District = District; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'District updated successfuly';
                        _this.router.navigate([_this.URL]);
                    });
                };
                DistrictFormComponent.prototype.getDistrict = function () {
                    var _this = this;
                    this.DistrictService.getDistrict(this.id)
                        .subscribe(function (District) { return _this.District = District; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.selectedCountry = _this.District.country;
                        _this.ReturnURL = _this.District.url;
                    });
                };
                DistrictFormComponent.prototype.buildForm = function () {
                    var _this = this;
                    this.DistrictForm = this.fomBuilder.group({
                        country_id: this.fomBuilder.control(null, forms_1.Validators.required),
                        country: this.fomBuilder.control({ value: this.selectedCountry }, forms_1.Validators.required),
                        city_id: this.fomBuilder.control(null, forms_1.Validators.required),
                        city: this.fomBuilder.control({ value: this.selectedCity }, forms_1.Validators.required),
                        name: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3),
                            forms_1.Validators.maxLength(25)])),
                        priority: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('[0-9]+')])),
                        keywords: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.minLength(10), forms_1.Validators.maxLength(150)])),
                        url: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3),
                            forms_1.Validators.maxLength(200)])),
                        active: this.fomBuilder.control(null, forms_1.Validators.required),
                        descriptions: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.minLength(60), forms_1.Validators.maxLength(250)])),
                    });
                    this.DistrictForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
                    this.onValueChanged(); // (re)set validation messages now
                };
                DistrictFormComponent.prototype.onValueChanged = function (data) {
                    if (!this.DistrictForm) {
                        return;
                    }
                    var form = this.DistrictForm;
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
                DistrictFormComponent = __decorate([
                    core_1.Component({
                        selector: 'prop-District-form',
                        templateUrl: './larangular/resources/assets/typescript/locations/districts/district.form.html',
                        styles: ["\n    \n        input[type=text].ng-valid,\n        select.ng-valid,\n        input[type=number].ng-valid,\n        textarea.ng-valid{\n            border-width: 2px;\n            background-color: #FAFFBD;\n        }\n\n        input[type=text],input[type=number],select{\n            height: 45px;\n            font-size: 110%;\n        }\n        textarea{\n            min-height: 150px!important;\n            font-size: 110%;\n            max-width: 100% !important;\n        }\n        .panel-default>.panel-heading {\n            color: #663663;\n            font-family: Arial, Helvetica, sans-serif;\n            font-size: 200%;\n        }\n\n        label\n        {\n            color: #898;\n            font-size: 120%\n        }\n        .error\n        {\n            color: #a94442;\n            font-size: 105%;\n        }\n        input[type=submit]{\n            color: #fff;\n        }\n        .has-error{    border-color: #a94442;}\n    "]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder, district_service_1.DistrictService])
                ], DistrictFormComponent);
                return DistrictFormComponent;
            }());
            exports_1("DistrictFormComponent", DistrictFormComponent);
        }
    }
});
