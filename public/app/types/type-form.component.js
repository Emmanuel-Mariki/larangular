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
    var core_1, forms_1, type_service_1, type_1, TypeFormComponent;
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
            TypeFormComponent = (function () {
                function TypeFormComponent(_fomBuilder, TypeService) {
                    this._fomBuilder = _fomBuilder;
                    this.TypeService = TypeService;
                    this.types = new type_1.PropertyTypes();
                    this.viewChanged = new core_1.EventEmitter();
                    this.NoficationMsg = new core_1.EventEmitter();
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
                }
                TypeFormComponent.prototype.ngOnInit = function () {
                    if (this.TypeViewMode == 'new')
                        this.ActionTitle = 'Add new property type';
                    this.ActionTitle = 'Edit property type';
                    this._buildForm();
                    console.log(this.TypeViewMode);
                };
                TypeFormComponent.prototype._buildForm = function () {
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
                        descriptions: this._fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(60),
                            forms_1.Validators.maxLength(250)]))
                    });
                    this.PropertyTypeForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
                    this.onValueChanged(); // (re)set validation messages now
                };
                TypeFormComponent.prototype.onSubmit = function () {
                    if (this.TypeViewMode == 'new') {
                        this.newPropType();
                    }
                    else {
                        this.putPropType();
                    }
                };
                //add property type
                TypeFormComponent.prototype.newPropType = function () {
                    var _this = this;
                    if (!this.PropertyTypeForm) {
                        return;
                    }
                    this.TypeService.postPropType(this.PropertyTypeForm.value)
                        .subscribe(function (types) { return _this.types = types; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.NoficationMsg.emit('Property type created successfuly');
                        _this.viewChanged.emit('list');
                    });
                };
                //update property type
                TypeFormComponent.prototype.putPropType = function () {
                    var _this = this;
                    this.TypeService.putPropType(this.IDPROPTYP, this.PropertyTypeForm.value)
                        .subscribe(function (types) { return _this.types = types; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.NoficationMsg.emit('Property type updated successfuly');
                        _this.viewChanged.emit('list');
                    });
                };
                //show property type
                // showPropType()
                // {
                //     this._Service.getPropType(this.id)
                //         .subscribe(
                //             types => this.types = types,
                //             error =>  this.errorMessage = <any>error  
                //         );
                // }
                TypeFormComponent.prototype.onValueChanged = function (data) {
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
                TypeFormComponent.prototype.ChangeView = function (event) {
                    this.viewChanged.emit(event);
                };
                return TypeFormComponent;
            }());
            TypeFormComponent = __decorate([
                core_1.Component({
                    selector: 'property-type-form',
                    templateUrl: './larangular/resources/assets/typescript/types/type-form.component.html',
                    styles: ["\n        input[type=text].ng-valid,\n        select.ng-valid,\n        input[type=number].ng-valid,\n        textarea.ng-valid{\n            border-width: 2px;\n            background-color: #FAFFBD;\n        }\n\n        input[type=text],input[type=number],select{\n            height: 45px;\n            font-size: 110%;\n        }\n        textarea{\n            min-height: 150px!important;\n            font-size: 110%;\n            max-width: 100% !important;\n        }\n        label\n        {\n            color: #898;\n            font-size: 120%\n        }\n        .error\n        {\n            color: #a94442;\n            font-size: 105%;\n        }\n        input[type=submit]{\n            color: #fff;\n        }\n        .has-error{border-color: #a94442;}\n        .btn{margin-top:15px; margin-bottom:15px;}\n    "],
                    inputs: ['TypeViewMode', 'IDPROPTYP', 'types'],
                    outputs: ['viewChanged', 'NoficationMsg']
                }),
                __metadata("design:paramtypes", [forms_1.FormBuilder,
                    type_service_1.TypeService])
            ], TypeFormComponent);
            exports_1("TypeFormComponent", TypeFormComponent);
        }
    };
});
