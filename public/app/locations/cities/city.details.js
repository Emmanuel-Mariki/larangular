System.register(['@angular/core', '@angular/router', "@angular/forms", './city', './city.service'], function(exports_1, context_1) {
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
    var core_1, router_1, forms_1, city_1, city_service_1;
    var CityDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (city_1_1) {
                city_1 = city_1_1;
            },
            function (city_service_1_1) {
                city_service_1 = city_service_1_1;
            }],
        execute: function() {
            CityDetailsComponent = (function () {
                function CityDetailsComponent(router, route, fomBuilder, CityService) {
                    this.router = router;
                    this.route = route;
                    this.fomBuilder = fomBuilder;
                    this.CityService = CityService;
                    this.Active = true;
                    this.City = new city_1.City();
                    this.ActionTitle = 'Edit City';
                    this.id = +this.route.snapshot.params['id'];
                    this.name = this.route.snapshot.params['name'];
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
                    this.formFields = {
                        'url': 'url',
                        'name': 'name',
                        'active': 'active',
                        'priority': 'priority',
                        'keywords': 'keywords',
                        'descriptions': 'descriptions'
                    };
                }
                CityDetailsComponent.prototype.ngOnInit = function () {
                    if (this.id) {
                        this.getCity();
                        this.buildForm();
                    }
                    if (this.id && !this.name) {
                        this.URL = '../larangular/dashboard/cities/Edit/' + this.id;
                    }
                    else if (this.id && this.name) {
                        this.URL = '../larangular/dashboard/countries/' + this.name + '/cities/' + this.id;
                    }
                };
                CityDetailsComponent.prototype.onSubmit = function (body) {
                    var _this = this;
                    this.CityService.putCity(this.id, body)
                        .subscribe(function (Category) { return _this.getCity(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'City updated successfuly';
                    });
                };
                // postCity()
                // {
                //     if (!this.CityForm) { return; }
                //     this.CityService.postCity(this.CityForm.value)
                //         .subscribe(
                //             City => this.City = City,
                //             error =>  this.errorMessage = <any>error,
                //             ()=>{
                //                 this.successMessage = 'City was created successfuly';
                //                 this.router.navigate([this.URL]);
                //             }
                //         );
                // }
                CityDetailsComponent.prototype.putCity = function () {
                    var _this = this;
                    this.CityService.putCity(this.id, this.CityForm.value)
                        .subscribe(function (City) { return _this.City = City; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'City updated successfuly';
                        _this.router.navigate([_this.URL]);
                    });
                };
                CityDetailsComponent.prototype.getCity = function () {
                    var _this = this;
                    this.CityService.getCity(this.id)
                        .subscribe(function (City) { return _this.City = City; }, function (error) { return _this.errorMessage = error; });
                };
                CityDetailsComponent.prototype.buildForm = function () {
                    var _this = this;
                    this.CityForm = this.fomBuilder.group({
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
                    this.CityForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
                    this.onValueChanged(); // (re)set validation messages now
                };
                CityDetailsComponent.prototype.onValueChanged = function (data) {
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
                CityDetailsComponent.prototype.setButtonClicked = function (clicked, ElementId) {
                    if (!this.formErrors[ElementId]) {
                        this.formFields[ElementId] = clicked;
                    }
                };
                CityDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'City-details',
                        templateUrl: './larangular/resources/assets/typescript/locations/cities/city.details.html',
                        styles: ["\n        .panel-default>.panel-heading>.title\n        {\n            color: #663663;\n            font-family: Arial, Helvetica, sans-serif;\n            font-size: 200%;\n        }\n        .panel-default>.panel-heading>.btn\n        {\n            position: relative;\n            top: -5px;\n            margin-left:5px;\n        }\n         .panel-default>.panel-body>form>.row>.col-md-12\n        {\n            padding:20px;\n            border-bottom:1px solid #d3e0e9;\n        }\n         .panel-default>.panel-body>form>.row>.col-md-12>.row>.col-md-3\n        {\n                color: #898;\n        }        \n    "]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder, city_service_1.CityService])
                ], CityDetailsComponent);
                return CityDetailsComponent;
            }());
            exports_1("CityDetailsComponent", CityDetailsComponent);
        }
    }
});
