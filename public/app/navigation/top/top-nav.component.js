System.register(["@angular/core"], function (exports_1, context_1) {
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
    var core_1, TopNavComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            TopNavComponent = (function () {
                function TopNavComponent() {
                    this.LoginRouteClicked = new core_1.EventEmitter();
                }
                TopNavComponent.prototype.ngOnInit = function () {
                };
                TopNavComponent.prototype.HideLeftMenu = function () {
                    this.LoginRouteClicked.emit(false);
                };
                TopNavComponent.prototype.ShowLeftMenu = function () {
                    this.LoginRouteClicked.emit(true);
                };
                return TopNavComponent;
            }());
            TopNavComponent = __decorate([
                core_1.Component({
                    selector: 'top-nav',
                    templateUrl: './larangular/resources/assets/typescript/navigation/top/top-nav.component.html',
                    styles: ["\n    .navbar-default\n    {\n      /*background-color:#E04F5F;*/\n\n      background-color: #6FD0E8;\n      height:115px;\n    }\n  "],
                    inputs: ['TopNavs'],
                    outputs: ['LoginRouteClicked'],
                }),
                __metadata("design:paramtypes", [])
            ], TopNavComponent);
            exports_1("TopNavComponent", TopNavComponent);
        }
    };
});
