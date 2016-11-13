System.register(["@angular/core", "@angular/forms", "@angular/router", "./category", "./cat.service", "../types/type.service"], function (exports_1, context_1) {
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
    var core_1, forms_1, router_1, category_1, cat_service_1, type_service_1, CatFormComponent;
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
            function (category_1_1) {
                category_1 = category_1_1;
            },
            function (cat_service_1_1) {
                cat_service_1 = cat_service_1_1;
            },
            function (type_service_1_1) {
                type_service_1 = type_service_1_1;
            }
        ],
        execute: function () {
            /**
            * name
            */
            CatFormComponent = (function () {
                function CatFormComponent(router, route, fomBuilder, TypeService, CateogoryService) {
                    this.router = router;
                    this.route = route;
                    this.fomBuilder = fomBuilder;
                    this.TypeService = TypeService;
                    this.CateogoryService = CateogoryService;
                    this.Category = new category_1.Category();
                    this.ActionTitle = 'New Category List';
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
                }
                CatFormComponent.prototype.ngOnInit = function () {
                    this.buildForm();
                    this.getTypes();
                    if (this.id) {
                        this.getCat();
                        this.ActionTitle = 'Edit Category';
                    }
                };
                CatFormComponent.prototype.onSubmit = function () {
                    if (!this.id) {
                        this.postCat();
                    }
                    else {
                        this.putCat();
                    }
                };
                CatFormComponent.prototype.postCat = function () {
                    var _this = this;
                    if (!this.CatForm) {
                        return;
                    }
                    this.CateogoryService.postCategory(this.CatForm.value)
                        .subscribe(function (Category) { return _this.Category = Category; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Property type category created successfuly';
                        _this.router.navigate(['../larangular/dashboard/property-categories']);
                    });
                };
                CatFormComponent.prototype.putCat = function () {
                    var _this = this;
                    this.CateogoryService.putCategory(this.id, this.CatForm.value)
                        .subscribe(function (Category) { return _this.Category = Category; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Property type updated successfuly';
                        _this.router.navigate(['../larangular/dashboard/property-categories']);
                    });
                };
                CatFormComponent.prototype.getTypes = function () {
                    var _this = this;
                    this.TypeService.getPropTypes()
                        .subscribe(function (Types) { return _this.Types = Types; }, function (error) { return _this.errorMessage = error; });
                };
                CatFormComponent.prototype.getCat = function () {
                    var _this = this;
                    this.CateogoryService.getCategory(this.id)
                        .subscribe(function (Category) { return _this.Category = Category; }, function (error) { return _this.errorMessage = error; });
                };
                CatFormComponent.prototype.buildForm = function () {
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
                CatFormComponent.prototype.onValueChanged = function (data) {
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
                return CatFormComponent;
            }());
            CatFormComponent = __decorate([
                core_1.Component({
                    selector: 'prop-cat-form',
                    templateUrl: './larangular/resources/assets/typescript/categories/cat.form.html',
                    styles: ["\n        input[type=text].ng-valid,\n        select.ng-valid,\n        input[type=number].ng-valid,\n        textarea.ng-valid{\n            border-width: 2px;\n            background-color: #FAFFBD;\n        }\n\n        input[type=text],input[type=number],select{\n            height: 45px;\n            font-size: 110%;\n        }\n        textarea{\n            min-height: 150px!important;\n            font-size: 110%;\n            max-width: 100% !important;\n        }\n        label\n        {\n            color: #898;\n            font-size: 120%\n        }\n        .error\n        {\n            color: #a94442;\n            font-size: 105%;\n        }\n        input[type=submit]{\n            color: #fff;\n        }\n        .has-error{    border-color: #a94442;}\n    "]
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    router_1.ActivatedRoute,
                    forms_1.FormBuilder,
                    type_service_1.TypeService,
                    cat_service_1.CatService])
            ], CatFormComponent);
            exports_1("CatFormComponent", CatFormComponent);
        }
    };
});
