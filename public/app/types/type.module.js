System.register(["@angular/core", "@angular/common", "@angular/forms", "./type.routing", "./type.component", "./type-list.component", "./type-form.component", "./type-view.component"], function (exports_1, context_1) {
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
    var core_1, common_1, forms_1, type_routing_1, type_component_1, type_list_component_1, type_form_component_1, type_view_component_1, PropertyTypeModule;
    return {
        setters: [
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
            function (type_component_1_1) {
                type_component_1 = type_component_1_1;
            },
            function (type_list_component_1_1) {
                type_list_component_1 = type_list_component_1_1;
            },
            function (type_form_component_1_1) {
                type_form_component_1 = type_form_component_1_1;
            },
            function (type_view_component_1_1) {
                type_view_component_1 = type_view_component_1_1;
            }
        ],
        execute: function () {
            PropertyTypeModule = (function () {
                function PropertyTypeModule() {
                }
                return PropertyTypeModule;
            }());
            PropertyTypeModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule,
                        forms_1.ReactiveFormsModule,
                        type_routing_1.TypeRouting
                    ],
                    declarations: [
                        type_component_1.TypeComponent,
                        type_form_component_1.TypeFormComponent,
                        type_list_component_1.TypeListComponent,
                        type_view_component_1.TypeViewComponent,
                    ],
                    exports: [
                        type_component_1.TypeComponent
                    ],
                    providers: [type_routing_1.PropertyTypeRouteProviders]
                }),
                __metadata("design:paramtypes", [])
            ], PropertyTypeModule);
            exports_1("PropertyTypeModule", PropertyTypeModule);
        }
    };
});
