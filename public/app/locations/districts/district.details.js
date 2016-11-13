System.register(["@angular/core", "@angular/router", "@angular/forms", "./district", "./district.service"], function (exports_1, context_1) {
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
    var core_1, router_1, forms_1, district_1, district_service_1, DistrictDetailsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (district_1_1) {
                district_1 = district_1_1;
            },
            function (district_service_1_1) {
                district_service_1 = district_service_1_1;
            }
        ],
        execute: function () {
            /**
            * name
            */
            DistrictDetailsComponent = (function () {
                function DistrictDetailsComponent(router, route, fomBuilder, DistrictService) {
                    this.router = router;
                    this.route = route;
                    this.fomBuilder = fomBuilder;
                    this.DistrictService = DistrictService;
                    this.Active = true;
                    this.District = new district_1.District();
                    this.ActionTitle = 'Edit district';
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
                    this.formFields = {
                        'url': 'url',
                        'name': 'name',
                        'active': 'active',
                        'priority': 'priority',
                        'keywords': 'keywords',
                        'descriptions': 'descriptions'
                    };
                }
                DistrictDetailsComponent.prototype.ngOnInit = function () {
                    if (this.id) {
                        this.getDistrict();
                        this.buildForm();
                    }
                    if (this.id && !this.name) {
                        this.URL = '../larangular/dashboard/cities/Edit/' + this.id;
                    }
                    else if (this.id && this.name) {
                        this.URL = '../larangular/dashboard/countries/' + this.name + '/cities/' + this.id;
                    }
                };
                DistrictDetailsComponent.prototype.onSubmit = function (body) {
                    var _this = this;
                    this.DistrictService.putDistrict(this.id, body)
                        .subscribe(function (Category) { return _this.getDistrict(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'District updated successfuly';
                    });
                };
                // postDistrict()
                // {
                //     if (!this.DistrictForm) { return; }
                //     this.DistrictService.postDistrict(this.DistrictForm.value)
                //         .subscribe(
                //             District => this.District = District,
                //             error =>  this.errorMessage = <any>error,
                //             ()=>{
                //                 this.successMessage = 'District was created successfuly';
                //                 this.router.navigate([this.URL]);
                //             }
                //         );
                // }
                DistrictDetailsComponent.prototype.putDistrict = function () {
                    var _this = this;
                    this.DistrictService.putDistrict(this.id, this.DistrictForm.value)
                        .subscribe(function (District) { return _this.District = District; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'District updated successfuly';
                        _this.router.navigate([_this.URL]);
                    });
                };
                DistrictDetailsComponent.prototype.getDistrict = function () {
                    var _this = this;
                    this.DistrictService.getDistrict(this.id)
                        .subscribe(function (District) { return _this.District = District; }, function (error) { return _this.errorMessage = error; });
                };
                DistrictDetailsComponent.prototype.buildForm = function () {
                    var _this = this;
                    this.DistrictForm = this.fomBuilder.group({
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
                    this.DistrictForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
                    this.onValueChanged(); // (re)set validation messages now
                };
                DistrictDetailsComponent.prototype.onValueChanged = function (data) {
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
                DistrictDetailsComponent.prototype.setButtonClicked = function (clicked, ElementId) {
                    if (!this.formErrors[ElementId]) {
                        this.formFields[ElementId] = clicked;
                    }
                };
                return DistrictDetailsComponent;
            }());
            DistrictDetailsComponent = __decorate([
                core_1.Component({
                    selector: 'district-details',
                    templateUrl: './larangular/resources/assets/typescript/locations/districts/district.details.html',
                    styles: ["\n    "]
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    router_1.ActivatedRoute,
                    forms_1.FormBuilder,
                    district_service_1.DistrictService])
            ], DistrictDetailsComponent);
            exports_1("DistrictDetailsComponent", DistrictDetailsComponent);
        }
    };
});
