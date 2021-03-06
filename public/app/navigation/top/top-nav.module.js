System.register(["@angular/core", "@angular/common", "./top-nav.routing", "./top-nav.component"], function (exports_1, context_1) {
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
    var core_1, common_1, top_nav_routing_1, top_nav_component_1, TopNavModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (top_nav_routing_1_1) {
                top_nav_routing_1 = top_nav_routing_1_1;
            },
            function (top_nav_component_1_1) {
                top_nav_component_1 = top_nav_component_1_1;
            }
        ],
        execute: function () {
            TopNavModule = (function () {
                function TopNavModule() {
                }
                return TopNavModule;
            }());
            TopNavModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule,
                        top_nav_routing_1.TopNavRouting
                    ],
                    declarations: [
                        top_nav_component_1.TopNavComponent,
                    ],
                    exports: [
                        top_nav_component_1.TopNavComponent
                    ],
                    providers: [top_nav_routing_1.TopNavRouteProviders]
                }),
                __metadata("design:paramtypes", [])
            ], TopNavModule);
            exports_1("TopNavModule", TopNavModule);
        }
    };
});
