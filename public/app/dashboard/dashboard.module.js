System.register(['@angular/core', '@angular/common', '@angular/forms', './dashboard.routing', './dashboard.component', './dash.links', './profile/profile'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, dashboard_routing_1, dashboard_component_1, dash_links_1, profile_1;
    var DashboardModule;
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
            function (dashboard_routing_1_1) {
                dashboard_routing_1 = dashboard_routing_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (dash_links_1_1) {
                dash_links_1 = dash_links_1_1;
            },
            function (profile_1_1) {
                profile_1 = profile_1_1;
            }],
        execute: function() {
            DashboardModule = (function () {
                function DashboardModule() {
                }
                DashboardModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            forms_1.FormsModule,
                            common_1.CommonModule,
                            dashboard_routing_1.DashboardRouting,
                            forms_1.ReactiveFormsModule,
                        ],
                        declarations: [
                            profile_1.ProfileComponent,
                            dashboard_component_1.DashboardComponent,
                            dash_links_1.DashLinksComponent,
                        ],
                        exports: [
                            dashboard_component_1.DashboardComponent
                        ],
                        providers: [
                            dashboard_routing_1.DashboardRouteProviders
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DashboardModule);
                return DashboardModule;
            }());
            exports_1("DashboardModule", DashboardModule);
        }
    }
});
