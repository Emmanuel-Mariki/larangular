System.register(["@angular/core", "@angular/forms", "./type.service", "./type"], function (exports_1, context_1) {
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
    var core_1, forms_1, type_service_1, type_1, TypeViewComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (type_service_1_1) {
                type_service_1 = type_service_1_1;
            },
            function (type_1_1) {
                type_1 = type_1_1;
            }
        ],
        execute: function () {
            TypeViewComponent = (function () {
                function TypeViewComponent(_fomBuilder, TypeService) {
                    this._fomBuilder = _fomBuilder;
                    this.TypeService = TypeService;
                    this.viewChanged = new core_1.EventEmitter();
                    this.PropType = new type_1.PropertyTypes();
                    this.formErrors = {
                        'name': '',
                        'priority': '',
                        'keywords': '',
                        'active': '',
                        'title': '',
                        'url': '',
                        'descriptions': ''
                    };
                    this.validationMessages = {
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
                        'active': 'active',
                        'priority': 'priority',
                        'url': 'url',
                        'title': 'title',
                        'name': 'name',
                        'keywords': 'keywords',
                        'descriptions': 'descriptions'
                    };
                }
                TypeViewComponent.prototype.ngOnInit = function () {
                    this._buildForm();
                };
                TypeViewComponent.prototype.ChangeView = function (event) {
                    this.viewChanged.emit(event);
                };
                TypeViewComponent.prototype.onSubmit = function (body) {
                    var _this = this;
                    this.TypeService.putPropType(this.IDPROPTYP, body)
                        .subscribe(function (type) { return _this.type; }, function (error) { return _this.errorMessage = error; }, function () {
                    });
                };
                TypeViewComponent.prototype._buildForm = function () {
                    var _this = this;
                    this.PropertyTypeForm = this._fomBuilder.group({
                        name: this._fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3),
                            forms_1.Validators.maxLength(15)])),
                        priority: this._fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('[0-9]+')])),
                        keywords: this._fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(10),
                            forms_1.Validators.maxLength(100)])),
                        title: this._fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3),
                            forms_1.Validators.maxLength(150)])),
                        url: this._fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3),
                            forms_1.Validators.maxLength(200)])),
                        active: this._fomBuilder.control(null, forms_1.Validators.required),
                        descriptions: this._fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(50),
                            forms_1.Validators.maxLength(250)]))
                    });
                    this.PropertyTypeForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
                    this.onValueChanged(); // (re)set validation messages now
                };
                TypeViewComponent.prototype.onValueChanged = function (data) {
                    if (!this.PropertyTypeForm) {
                        return;
                    }
                    var form = this.PropertyTypeForm;
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
                TypeViewComponent.prototype.Deactivate = function (id) {
                    var _this = this;
                    var body = { 'active': '0' };
                    this.TypeService.putPropType(this.IDPROPTYP, body)
                        .subscribe(function (type) { return _this.type; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Property type deactivated successfuly';
                        console.log(_this.type.active);
                    });
                };
                TypeViewComponent.prototype.Activate = function (id) {
                    var _this = this;
                    var body = { 'active': '1' };
                    this.TypeService.putPropType(this.IDPROPTYP, body)
                        .subscribe(function (type) { return _this.type; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Property type activated successfuly';
                        console.log(_this.type.active);
                    });
                };
                TypeViewComponent.prototype.setButtonClicked = function (clicked, ElementId) {
                    if (!this.formErrors[ElementId]) {
                        this.formFields[ElementId] = clicked;
                    }
                };
                return TypeViewComponent;
            }());
            TypeViewComponent = __decorate([
                core_1.Component({
                    selector: 'property-type-view',
                    template: "\n    <div class=\"col-md-12\" id=\"\">\n        <a class=\"btn\" (click)=\"ChangeView('list')\">\n            <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n        </a>\n        <span class=\"title\">\n            {{type.name }} Details\n        </span>\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"successMessage\">\n            {{successMessage}}\n        </div>\n        <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"errorMessage\">\n            {{errorMessage}}\n        </div>\n        <form [formGroup]=\"PropertyTypeForm\"  (ngSubmit)=\"onSubmit(PropertyTypeForm.value)\" novalidate >\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">URL:</div>\n                        <div class=\"col-md-8\"  *ngIf=\"formFields.url =='url'\">\n                            {{type.url}} \n                        </div>\n                        <div class=\"col-md-1\">\n                            <i class=\"fa fa-pencil btn\" \n                                (click)=\"setButtonClicked('','url')\"\n                                *ngIf=\"formFields.url =='url'\"\n                                aria-hidden=\"true\">\n                            </i>\n                            <button type=\"submit\" class=\"btn save\"\n                                *ngIf=\"formFields.url ==''\" \n                                (click)=\"setButtonClicked('url','url'); \n                                onSubmit({url:type.url})\">\n                                <i class=\"fa fa-floppy-o\" aria-hidden=\"true\">\n                                </i>\n                            </button>\n                        </div>\n                        <div class=\"form-group col-md-8 url-form\" \n                            *ngIf=\"formFields.url ==''\"\n                            [ngClass]=\"{'has-error':formErrors.url, \n                            'has-success':PropertyTypeForm.controls['url'].valid}\">\n                            <input type=\"text\" formControlName=\"url\" \n                            [(ngModel)] =\"type.url\"\n                            class=\"form-control\" id=\"url\"/>\n                            <span *ngIf=\"formErrors.url\" class=\"help-block error\">\n                                {{ formErrors.url }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">Title:</div>\n                        <div class=\"col-md-8\" *ngIf=\"formFields.title =='title'\">\n                            {{type.title}} \n                        </div>\n                        <div class=\"col-md-1\">\n                            <i class=\"fa fa-pencil btn\" \n                                (click)=\"setButtonClicked('','title')\"\n                                *ngIf=\"formFields.title =='title'\"\n                                aria-hidden=\"true\">\n                            </i>\n                            <button type=\"submit\" class=\"btn save\"\n                                *ngIf=\"formFields.title ==''\"\n                                (click)=\"setButtonClicked('title','title'); \n                                onSubmit({title:type.title})\">\n                                <i class=\"fa fa-floppy-o\" aria-hidden=\"true\">\n                                </i>\n                            </button>\n                        </div>\n                        <div class=\"form-group col-md-8\"\n                            *ngIf=\"formFields.title ==''\"\n                            [ngClass]=\"{'has-error':formErrors.title, \n                            'has-success':PropertyTypeForm.controls['title'].valid}\">\n                            <input type=\"text\" formControlName=\"title\" value=\"type.title\"\n                            [(ngModel)] =\"type.title\" \n                            class=\"form-control\" id=\"title\"/>\n                            <span *ngIf=\"formErrors.title\" class=\"help-block error\">\n                                {{ formErrors.title }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">Name:</div>\n                        <div class=\"col-md-8\" *ngIf=\"formFields.name =='name'\">\n                            {{type.name}} \n                        </div>\n                        <div class=\"col-md-1\">\n                            <i class=\"fa fa-pencil btn\" \n                                (click)=\"setButtonClicked('','name')\"\n                                *ngIf=\"formFields.name =='name'\"\n                                aria-hidden=\"true\">\n                            </i>\n                            <button type=\"submit\" class=\"btn save\"\n                                *ngIf=\"formFields.name ==''\"\n                                (click)=\"setButtonClicked('name','name'); \n                                onSubmit({name:type.name})\">\n                                <i class=\"fa fa-floppy-o\" aria-hidden=\"true\">\n                                </i>\n                            </button>\n                        </div>\n                        <div class=\"form-group col-md-8\" *ngIf=\"formFields.name ==''\"\n                            [ngClass]=\"{'has-error':formErrors.name, \n                            'has-success':PropertyTypeForm.controls['name'].valid}\">\n                            <input type=\"text\" formControlName=\"name\" \n                            [(ngModel)] =\"type.name\"\n                            class=\"form-control\" id=\"name\"/>\n                            <span *ngIf=\"formErrors.name\" class=\"help-block error\">\n                                {{ formErrors.name }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">Priority:</div>\n                        <div class=\"col-md-8\" *ngIf=\"formFields.priority == 'priority'\">\n                            {{type.priority}} \n                        </div>\n                        <div class=\"col-md-1\">\n                            <i class=\"fa fa-pencil btn\" \n                                (click)=\"setButtonClicked('','priority')\"\n                                *ngIf=\"formFields.priority =='priority'\"\n                                aria-hidden=\"true\">\n                            </i>\n                            <button type=\"submit\" class=\"btn save\"\n                                *ngIf=\"formFields.priority ==''\"\n                                (click)=\"setButtonClicked('priority','priority'); \n                                onSubmit({priority:type.priority})\">\n                                <i class=\"fa fa-floppy-o\" aria-hidden=\"true\">\n                                </i>\n                            </button>\n                        </div>\n                        <div class=\"form-group col-md-8\" *ngIf=\"formFields.priority == ''\"\n                            [ngClass]=\"{'has-error':formErrors.priority, \n                            'has-success':PropertyTypeForm.controls['priority'].valid}\">\n                            <input type=\"number\" formControlName=\"priority\" \n                            [(ngModel)] =\"type.priority\"\n                            class=\"form-control\" id=\"priority\"/>\n                            <span *ngIf=\"formErrors.priority\" class=\"help-block error\">\n                                {{ formErrors.priority }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">Keywords:</div>\n                        <div class=\"col-md-8\" *ngIf=\"formFields.keywords == 'keywords'\">\n                            {{type.keywords}} \n                        </div>\n                        <div class=\"col-md-1\">\n                            <i class=\"fa fa-pencil btn\" \n                                (click)=\"setButtonClicked('','keywords')\"\n                                *ngIf=\"formFields.keywords =='keywords'\"\n                                aria-hidden=\"true\">\n                            </i>\n                            <button type=\"submit\" class=\"btn save\"\n                                *ngIf=\"formFields.keywords ==''\"\n                                (click)=\"setButtonClicked('keywords','keywords'); \n                                onSubmit({keywords:type.keywords})\">\n                                <i class=\"fa fa-floppy-o\" aria-hidden=\"true\">\n                                </i>\n                            </button>\n                        </div>\n                        <div class=\"form-group col-md-8\" *ngIf=\"formFields.keywords == ''\"\n                            [ngClass]=\"{'has-error':formErrors.keywords, \n                            'has-success':PropertyTypeForm.controls['keywords'].valid}\">\n                            <input type=\"text\" formControlName=\"keywords\" \n                            [(ngModel)] =\"type.keywords\"\n                            class=\"form-control\" id=\"keywords\"/>\n                            <span *ngIf=\"formErrors.keywords\" class=\"help-block error\">\n                                {{ formErrors.keywords }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\" *ngIf=\"formFields.descriptions == 'descriptions'\">\n                        Descriptions:</div>\n                        <div class=\"col-md-8\" *ngIf=\"formFields.descriptions == 'descriptions'\">\n                            {{type.descriptions}}\n                        </div>\n                        <div class=\"col-md-1\">\n                            <i class=\"fa fa-pencil btn\" \n                                (click)=\"setButtonClicked('','descriptions')\"\n                                *ngIf=\"formFields.descriptions =='descriptions'\"\n                                aria-hidden=\"true\">\n                            </i>\n                            <button type=\"submit\" class=\"btn save\"\n                                *ngIf=\"formFields.descriptions ==''\"\n                                (click)=\"setButtonClicked('descriptions','descriptions'); \n                                onSubmit({descriptions:type.descriptions})\">\n                                <i class=\"fa fa-floppy-o\" aria-hidden=\"true\">\n                                </i>\n                            </button>\n                        </div>\n                        <div class=\"form-group col-md-11\"*ngIf=\"formFields.descriptions == ''\"\n                        [ngClass]=\"{'has-error':formErrors.descriptions, \n                        'has-success':PropertyTypeForm.controls['descriptions'].valid}\">\n                            <textarea class=\"form-control\" id=\"descriptions\" cols=\"10\"\n                            formControlName=\"descriptions\"\n                            [(ngModel)] =\"type.descriptions\"></textarea>\n                            <span *ngIf=\"formErrors.descriptions\" class=\"help-block error\">\n                                {{ formErrors.descriptions }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">Created:</div>\n                        <div class=\"col-md-9\">\n                            {{type.created_at | date}}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">Updated:</div>\n                        <div class=\"col-md-9\">\n                            {{type.updated_at | date}}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">Active:</div>\n                        <div class=\"col-md-8\" [hidden]=\"visible\">\n                            <span *ngIf=\"type.active == '1'\"> Yes</span>\n                            <span *ngIf=\"type.active == '0'\"> No</span>\n                        </div>\n                        <div class=\"col-md-1\">\n                            <i *ngIf=\"type.active == '1'\" \n                                style=\"cursor:pointer\"\n                                (click)=\"Deactivate(type.IDPROPTYP)\"\n                                class=\"fa fa-check\" aria-hidden=\"true\">\n                            </i>\n                            <i *ngIf=\"type.active == '0'\" \n                                style=\"cursor:pointer\"\n                                (click)=\"Activate(type.IDPROPTYP)\"\n                                class=\"fa fa-remove\" aria-hidden=\"true\">\n                            </i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n    ",
                    styles: ["\n        input[type=text].ng-valid,\n        select.ng-valid,\n        input[type=number].ng-valid,\n        textarea.ng-valid{\n            border-width: 2px;\n            background-color: #FAFFBD;\n        }\n\n        input[type=text],input[type=number],select{\n            height: 45px;\n            font-size: 110%;\n        }\n        textarea{\n            min-height: 150px!important;\n            font-size: 110%;\n            max-width: 100% !important;\n        }\n        label\n        {\n            color: #898;\n            font-size: 120%\n        }\n        .error\n        {\n            color: #a94442;\n            font-size: 105%;\n        }\n        input[type=submit]{\n            color: #fff;\n        }\n        .has-error{border-color: #a94442;}\n        .btn{margin-top:15px; margin-bottom:15px;}\n        form\n        {\n            margin-left:15px;\n            margin-right:15px;\n        }\n        .col-md-12\n        {\n            border-top: 1px solid;\n            border-color: #DCDCDC;\n            padding-top:10px;\n            padding-bottom:10px;\n        }\n        .col-md-3\n        {\n            font-weight: 800;\n            color: #999;\n        }\n        .save\n        {\n            position:relative;\n            top:-7px;\n        }\n    "],
                    inputs: ['type', 'IDPROPTYP'],
                    outputs: ['viewChanged']
                }),
                __metadata("design:paramtypes", [forms_1.FormBuilder,
                    type_service_1.TypeService])
            ], TypeViewComponent);
            exports_1("TypeViewComponent", TypeViewComponent);
        }
    };
});
