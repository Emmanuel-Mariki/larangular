System.register(['@angular/core', '@angular/router', "@angular/forms", './category', './cat.service', '../types/type.service'], function(exports_1, context_1) {
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
    var core_1, router_1, forms_1, category_1, cat_service_1, type_service_1;
    var CatDetailsComponent;
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
            function (category_1_1) {
                category_1 = category_1_1;
            },
            function (cat_service_1_1) {
                cat_service_1 = cat_service_1_1;
            },
            function (type_service_1_1) {
                type_service_1 = type_service_1_1;
            }],
        execute: function() {
            CatDetailsComponent = (function () {
                function CatDetailsComponent(router, route, fomBuilder, TypeService, CateogoryService) {
                    this.router = router;
                    this.route = route;
                    this.fomBuilder = fomBuilder;
                    this.TypeService = TypeService;
                    this.CateogoryService = CateogoryService;
                    this.Active = true;
                    this.Category = new category_1.Category();
                    this.ActionTitle = 'Edit Category';
                    this.id = +this.route.snapshot.params['id'];
                    this.formErrors = {
                        'type_id': '',
                        'name': '',
                        'priority': '',
                        'keywords': '',
                        'active': '',
                        'title': '',
                        'url': '',
                        'descriptions': ''
                    };
                    this.validationMessages = {
                        'type_id': {
                            'required': 'Please select property type for this category.',
                        },
                        'name': {
                            'required': 'Property type name is required.',
                            'minlength': 'Property type name must be at least 3 characters long.',
                            'maxlength': 'Property type name cannot be more than 15 characters long.',
                            'pattern': 'Property type name can only contain alphabetical characters.'
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
                        'title': {
                            'required': 'Browser title is required.',
                            'minlength': 'Browser title must be at least 3 characters long.',
                            'maxlength': 'Browser title cannot be more than 15 characters long.',
                            'pattern': 'Browser titlecan only contain alphabetical characters.'
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
                        'title': 'title',
                        'active': 'active',
                        'type_id': 'type_id',
                        'priority': 'priority',
                        'keywords': 'keywords',
                        'descriptions': 'descriptions'
                    };
                }
                CatDetailsComponent.prototype.ngOnInit = function () {
                    if (this.id) {
                        this.getCat();
                        this.getTypes();
                        this.buildForm();
                    }
                };
                CatDetailsComponent.prototype.onSubmit = function (body) {
                    var _this = this;
                    this.CateogoryService.putCategory(this.id, body)
                        .subscribe(function (Category) { return _this.getCat(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Property type updated successfuly';
                    });
                };
                CatDetailsComponent.prototype.getCat = function () {
                    var _this = this;
                    this.CateogoryService.getCategory(this.id)
                        .subscribe(function (Category) { return _this.Category = Category; }, function (error) { return _this.errorMessage = error; });
                };
                CatDetailsComponent.prototype.getTypes = function () {
                    var _this = this;
                    this.TypeService.getPropTypes()
                        .subscribe(function (Types) { return _this.Types = Types; }, function (error) { return _this.errorMessage = error; });
                };
                CatDetailsComponent.prototype.Deactivate = function (id) {
                    var _this = this;
                    var body = { 'active': '0' };
                    this.CateogoryService.putCategory(id, body)
                        .subscribe(function (Category) { return _this.getCat(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Category deactivated successfuly';
                    });
                };
                CatDetailsComponent.prototype.Activate = function (id) {
                    var _this = this;
                    var body = { 'active': '1' };
                    this.CateogoryService.putCategory(id, body)
                        .subscribe(function (Category) { return _this.getCat(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Category activated successfuly';
                    });
                };
                CatDetailsComponent.prototype.buildForm = function () {
                    var _this = this;
                    this.CatForm = this.fomBuilder.group({
                        type_id: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required])),
                        name: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3),
                            forms_1.Validators.maxLength(25)])),
                        priority: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('[0-9]+')])),
                        keywords: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(10),
                            forms_1.Validators.maxLength(150)])),
                        title: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3),
                            forms_1.Validators.maxLength(150)])),
                        url: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3),
                            forms_1.Validators.maxLength(200)])),
                        active: this.fomBuilder.control(null, forms_1.Validators.required),
                        descriptions: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(60),
                            forms_1.Validators.maxLength(250)]))
                    });
                    this.CatForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
                    this.onValueChanged(); // (re)set validation messages now
                };
                CatDetailsComponent.prototype.onValueChanged = function (data) {
                    if (!this.CatForm) {
                        return;
                    }
                    var form = this.CatForm;
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
                CatDetailsComponent.prototype.setButtonClicked = function (clicked, ElementId) {
                    if (!this.formErrors[ElementId]) {
                        this.formFields[ElementId] = clicked;
                    }
                };
                CatDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'prop-type-cat-details',
                        templateUrl: './larangular/resources/assets/typescript/categories/cat.details.html',
                        styles: ["\n         .panel-default>.panel-body>form>.row>.col-md-12\n        {\n            padding:20px;\n            border-bottom:1px solid #d3e0e9;\n        }\n         .panel-default>.panel-body>form>.row>.col-md-12>.row>.col-md-3\n        {\n                color: #898;\n        }        \n    "]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder, type_service_1.TypeService, cat_service_1.CatService])
                ], CatDetailsComponent);
                return CatDetailsComponent;
            }());
            exports_1("CatDetailsComponent", CatDetailsComponent);
        }
    }
});
