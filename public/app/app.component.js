System.register(['@angular/core', './types/type.service'], function(exports_1, context_1) {
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
    var core_1, type_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (type_service_1_1) {
                type_service_1 = type_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(TypeService) {
                    this.TypeService = TypeService;
                    this.ShowLeftNavs = true;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getTopNavs();
                };
                AppComponent.prototype.getTopNavs = function () {
                    var _this = this;
                    this.TypeService.getPropTypes()
                        .subscribe(function (Navigations) { return _this.Navigations = Navigations; }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent.prototype.getRoute = function (event) {
                    this.ShowLeftNavs = event;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <top-nav [TopNavs]=\"Navigations\" \n             (LoginRouteClicked)=\"getRoute($event)\">\n    </top-nav>\n    <div class=\"container\">\n      <div class=\"row\">\n        <left-nav [TopNavs]=\"Navigations\" \n                  *ngIf=\"ShowLeftNavs\">\n        </left-nav>\n        <search-box  *ngIf=\"ShowLeftNavs\"></search-box>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <!--<div class=\"container-fluid\" id=\"footer\"></div>-->\n    ",
                    }), 
                    __metadata('design:paramtypes', [type_service_1.TypeService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
