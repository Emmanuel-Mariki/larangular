System.register(['@angular/core', '@angular/platform-browser', '@angular/http', "./types/type.service", './app.routing', './app.component', './home/home.component', './search/search-box.component', './categories/cat.module', './auth/auth.module', './navigation/top/top-nav.module', './navigation/left/left-nav.module', './locations/location.module', './dashboard/dashboard.module', './types/type.module'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, http_1, type_service_1, app_routing_1, app_component_1, home_component_1, search_box_component_1, cat_module_1, auth_module_1, top_nav_module_1, left_nav_module_1, location_module_1, dashboard_module_1, type_module_1;
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
            function (type_service_1_1) {
                type_service_1 = type_service_1_1;
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
            function (search_box_component_1_1) {
                search_box_component_1 = search_box_component_1_1;
            },
            function (cat_module_1_1) {
                cat_module_1 = cat_module_1_1;
            },
            function (auth_module_1_1) {
                auth_module_1 = auth_module_1_1;
            },
            function (top_nav_module_1_1) {
                top_nav_module_1 = top_nav_module_1_1;
            },
            function (left_nav_module_1_1) {
                left_nav_module_1 = left_nav_module_1_1;
            },
            function (location_module_1_1) {
                location_module_1 = location_module_1_1;
            },
            function (dashboard_module_1_1) {
                dashboard_module_1 = dashboard_module_1_1;
            },
            function (type_module_1_1) {
                type_module_1 = type_module_1_1;
            }],
        execute: function() {
            ;
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [app_routing_1.routing,
                            cat_module_1.CatModule,
                            http_1.HttpModule,
                            auth_module_1.AuthModule,
                            http_1.JsonpModule,
                            top_nav_module_1.TopNavModule,
                            left_nav_module_1.LeftNavModule,
                            platform_browser_1.BrowserModule,
                            location_module_1.LocationModule,
                            dashboard_module_1.DashboardModule,
                            type_module_1.PropertyTypeModule,
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            home_component_1.HomeComponent,
                            search_box_component_1.SearchBoxComponent,
                        ],
                        providers: [
                            type_service_1.TypeService,
                            app_routing_1.appRoutingProviders,
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
