System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'my-app',
                        template: "\n    <top-nav></top-nav>\n    <div class=\"container\">\n      <div class=\"row\">\n          <left-nav></left-nav>\n          <search-box></search-box>\n          <div class=\"col-lg-9\" id=\"content\">\n              <router-outlet></router-outlet>\n          </div>\n      </div>\n    </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

System.register(['@angular/router', './home/home.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1;
    var appRoutes, appRoutingProviders, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: '', component: home_component_1.HomeComponent },
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});

System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var TypeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TypeComponent = (function () {
                function TypeComponent() {
                }
                TypeComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'property-type',
                        templateUrl: 'type.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], TypeComponent);
                return TypeComponent;
            }());
            exports_1("TypeComponent", TypeComponent);
        }
    }
});

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});

System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var TypeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            TypeService = (function () {
                function TypeService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({
                        'Content-Type': 'application/jsonp',
                    });
                    this.TypeUrl = 'http://localhost/laravel/types'; // URL to web api
                }
                TypeService.prototype.create = function (PropertyTypes) {
                    return this.http
                        .post(this.TypeUrl, JSON.stringify({ PropertyTypes: PropertyTypes }), { headers: this.headers })
                        .toPromise()
                        .then(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                TypeService.prototype.delete = function (id) {
                    var url = this.TypeUrl + "/" + id;
                    return this.http.delete(url, { headers: this.headers })
                        .toPromise()
                        .then(function () { return null; })
                        .catch(this.handleError);
                };
                TypeService.prototype.update = function (PropertyTypes) {
                    var url = this.TypeUrl + "/" + PropertyTypes.id;
                    return this.http
                        .put(url, JSON.stringify(PropertyTypes), { headers: this.headers })
                        .toPromise()
                        .then(function () { return PropertyTypes; })
                        .catch(this.handleError);
                };
                TypeService.prototype.getPropertyTypes = function () {
                    return this.http.get(this.TypeUrl)
                        .toPromise()
                        .then(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                //getPropertyType(id: number): Promise<PropertyTypes[]> {
                //return this.getPropertyTypes()
                //.then(propType => propType.find(propType => propType.id === id));
                //}
                TypeService.prototype.handleError = function (error) {
                    console.error('An error occurred', error); // for demo purposes only
                    return Promise.reject(error.message || error);
                };
                TypeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TypeService);
                return TypeService;
            }());
            exports_1("TypeService", TypeService);
        }
    }
});

System.register(["@angular/core", "@angular/forms", './type.service'], function(exports_1, context_1) {
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
    var core_1, forms_1, type_service_1;
    var TypeFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (type_service_1_1) {
                type_service_1 = type_service_1_1;
            }],
        execute: function() {
            TypeFormComponent = (function () {
                function TypeFormComponent(_fomBuilder, _Service) {
                    this._fomBuilder = _fomBuilder;
                    this._Service = _Service;
                    this.ActionTitle = 'Add property types';
                    this.formErrors = {
                        'name': '',
                        'priority': '',
                        'keywords': '',
                        'active': '',
                        'title': '',
                        'URL': '',
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
                        'URL': {
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
                    this._buildForm();
                }
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
                        URL: this._fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3),
                            forms_1.Validators.maxLength(150)])),
                        active: this._fomBuilder.control(null, forms_1.Validators.required),
                        descriptions: this._fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(60),
                            forms_1.Validators.maxLength(150)]))
                    });
                    this.PropertyTypeForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
                    this.onValueChanged(); // (re)set validation messages now
                };
                TypeFormComponent.prototype.onSubmit = function () {
                    console.log(this.PropertyTypeForm.value);
                    if (!this.PropertyTypeForm) {
                        return;
                    }
                    this._Service.create(this.PropertyTypeForm.value);
                };
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
                TypeFormComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'property-type-form',
                        templateUrl: 'type-form.component.html',
                        styleUrls: ['type-form.css']
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, type_service_1.TypeService])
                ], TypeFormComponent);
                return TypeFormComponent;
            }());
            exports_1("TypeFormComponent", TypeFormComponent);
        }
    }
});

System.register(['@angular/core', '@angular/common', '@angular/forms', './type.routing', "./type.service", "./type.component", "./type-list.component", "./type-form.component"], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, type_routing_1, type_service_1, type_component_1, type_list_component_1, type_form_component_1;
    var PropertyTypeModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (type_routing_1_1) {
                type_routing_1 = type_routing_1_1;
            },
            function (type_service_1_1) {
                type_service_1 = type_service_1_1;
            },
            function (type_component_1_1) {
                type_component_1 = type_component_1_1;
            },
            function (type_list_component_1_1) {
                type_list_component_1 = type_list_component_1_1;
            },
            function (type_form_component_1_1) {
                type_form_component_1 = type_form_component_1_1;
            }],
        execute: function() {
            PropertyTypeModule = (function () {
                function PropertyTypeModule() {
                }
                PropertyTypeModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            forms_1.ReactiveFormsModule,
                            type_routing_1.TypeRouting
                        ],
                        declarations: [
                            // TypeOfProperty, 
                            type_component_1.TypeComponent,
                            type_form_component_1.TypeFormComponent,
                            type_list_component_1.TypeListComponent
                        ],
                        exports: [
                            type_component_1.TypeComponent
                        ],
                        providers: [type_service_1.TypeService, type_routing_1.PropertyTypeRouteProviders]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyTypeModule);
                return PropertyTypeModule;
            }());
            exports_1("PropertyTypeModule", PropertyTypeModule);
        }
    }
});

System.register(['@angular/core', '@angular/platform-browser', '@angular/http', './app.routing', './app.component', './home/home.component', './navigation/top/top-nav.component', './navigation/left/left-nav.component', './search/search-box.component', './types/type.module'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, http_1, app_routing_1, app_component_1, home_component_1, top_nav_component_1, left_nav_component_1, search_box_component_1, type_module_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (top_nav_component_1_1) {
                top_nav_component_1 = top_nav_component_1_1;
            },
            function (left_nav_component_1_1) {
                left_nav_component_1 = left_nav_component_1_1;
            },
            function (search_box_component_1_1) {
                search_box_component_1 = search_box_component_1_1;
            },
            function (type_module_1_1) {
                type_module_1 = type_module_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            // ContactModule,
                            type_module_1.PropertyTypeModule,
                            http_1.HttpModule,
                            http_1.JsonpModule,
                            app_routing_1.routing,
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            home_component_1.HomeComponent,
                            top_nav_component_1.TopNavComponent,
                            left_nav_component_1.LeftNavComponent,
                            search_box_component_1.SearchBoxComponent,
                        ],
                        providers: [
                            app_routing_1.appRoutingProviders
                        ],
                        bootstrap: [app_component_1.AppComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});

System.register(['@angular/platform-browser-dynamic', './app.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_module_1;
    var platform;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(app_module_1.AppModule);
        }
    }
});

//# sourceMappingURL=app.js.map
