System.register(["@angular/core", "@angular/common", "./left-nav.routing", "./left-nav.component"], function (exports_1, context_1) {
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
    var core_1, common_1, left_nav_routing_1, left_nav_component_1, LeftNavModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (left_nav_routing_1_1) {
                left_nav_routing_1 = left_nav_routing_1_1;
            },
            function (left_nav_component_1_1) {
                left_nav_component_1 = left_nav_component_1_1;
            }
        ],
        execute: function () {
            LeftNavModule = (function () {
                function LeftNavModule() {
                }
                return LeftNavModule;
            }());
            LeftNavModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule,
                        left_nav_routing_1.LeftNavRouting
                    ],
                    declarations: [
                        left_nav_component_1.LeftNavComponent,
                    ],
                    exports: [
                        left_nav_component_1.LeftNavComponent
                    ],
                    providers: [left_nav_routing_1.LeftNavRouteProviders]
                }),
                __metadata("design:paramtypes", [])
            ], LeftNavModule);
            exports_1("LeftNavModule", LeftNavModule);
        }
    };
});
