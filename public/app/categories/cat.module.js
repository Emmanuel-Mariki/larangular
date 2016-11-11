System.register(['@angular/core', '@angular/common', '@angular/forms', './CatFilterPipe', "./cat.component", './cat.service', './cat.form', './cat.list', './cat.details', './cat.routing'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, CatFilterPipe_1, cat_component_1, cat_service_1, cat_form_1, cat_list_1, cat_details_1, cat_routing_1;
    var CatModule;
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
            function (CatFilterPipe_1_1) {
                CatFilterPipe_1 = CatFilterPipe_1_1;
            },
            function (cat_component_1_1) {
                cat_component_1 = cat_component_1_1;
            },
            function (cat_service_1_1) {
                cat_service_1 = cat_service_1_1;
            },
            function (cat_form_1_1) {
                cat_form_1 = cat_form_1_1;
            },
            function (cat_list_1_1) {
                cat_list_1 = cat_list_1_1;
            },
            function (cat_details_1_1) {
                cat_details_1 = cat_details_1_1;
            },
            function (cat_routing_1_1) {
                cat_routing_1 = cat_routing_1_1;
            }],
        execute: function() {
            CatModule = (function () {
                function CatModule() {
                }
                CatModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            cat_routing_1.CatRouting,
                            forms_1.FormsModule,
                            common_1.CommonModule,
                            forms_1.ReactiveFormsModule,
                        ],
                        declarations: [
                            cat_component_1.CatComponent,
                            CatFilterPipe_1.CatFilterPipe,
                            cat_list_1.CatListComponent,
                            cat_form_1.CatFormComponent,
                            cat_details_1.CatDetailsComponent,
                        ],
                        exports: [
                            cat_component_1.CatComponent,
                        ],
                        providers: [cat_service_1.CatService, cat_routing_1.CatRouteProviders]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CatModule);
                return CatModule;
            }());
            exports_1("CatModule", CatModule);
        }
    }
});
