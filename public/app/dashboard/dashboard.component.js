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
    var core_1, DashboardComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            DashboardComponent = (function () {
                function DashboardComponent() {
                    this.viewMode = 'profile';
                    this.LoginRouteClicked = new core_1.EventEmitter();
                }
                DashboardComponent.prototype.ngOnInit = function () {
                };
                DashboardComponent.prototype.HideLeftAndSearch = function () {
                    this.LoginRouteClicked.emit(false);
                };
                return DashboardComponent;
            }());
            DashboardComponent = __decorate([
                core_1.Component({
                    selector: 'dashboard',
                    template: "\n        <div class=\"col-md-9\" id=\"content\">\n            <ul class=\"nav nav-aills  nav-justified\">\n                <li role=\"aresentation\"  class=\"dash-link\" \n                    [class.dash-active]=\"viewMode == 'profile'\">\n                    <a (click)=\"viewMode='profile'\">Profile</a>\n                </li>\n                <li role=\"aresentation\"  class=\"dash-link\" \n                    [class.dash-active]=\"viewMode == 'property'\">\n                    <a (click)=\"viewMode='property'\">\n                        Property<span class=\"badge\">15</span>\n                    </a>\n                </li>\n                <li role=\"aresentation\" class=\"dash-link\">\n                    <a (click)=\"viewMode='inquires'\">\n                        Inquires<span class=\"badge\">20</span>\n                    </a>\n                </li>\n                <li role=\"aresentation\" class=\"dash-link\">\n                    <a (click)=\"viewMode='contacts'\">Contacts</a>\n                </li>\n                <li role=\"aresentation\" class=\"dash-link\">\n                    <a (click)=\"viewMode='analytics'\">Analytics</a>\n                </li>\n                <li role=\"aresentation\" class=\"dash-link\" \n                    [class.dash-active]=\"viewMode == 'admin'\">\n                    <a (click)=\"viewMode='admin'\">\n                        Site Administration\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"col-md-9\" id=\"content\" [ngSwitch]=\"viewMode\">\n            <template [ngSwitchCase]=\"'profile'\" ngSwitchDefault>\n                <app-profile></app-profile>\n            </template>\n            <template [ngSwitchCase]=\"'property'\">\n                <profile-listing></profile-listing>\n            </template>\n            <template [ngSwitchCase]=\"'admin'\">\n                <app-admin></app-admin>\n            </template>\n        </div>\n        \n    ",
                    styles: ["\n        .dash-link\n        {\n            border-radius:0px;\n            background-color:#FBBC05;\n        }\n        .dash-link>a\n        {\n            color: #FFF;\n            font-size: 100%;\n            font-weight: 800;\n            padding: 10px;\n            margin: auto;\n            text-align: center;\n            cursor:pointer;\n        }\n        .dash-link>a:hover\n        {\n            border-radius:0px;\n            background-color:#E04F5F;\n            font-weight:600;\n        }\n        .dash-active\n        {\n            background-color:#E04F5F;\n        }\n        .nav-pills > li > a > .badge\n        {\n            position:relative;\n            top:-1px;\n            margin-left:3px;\n        }\n    \n    "],
                    outputs: ['LoginRouteClicked']
                }),
                __metadata("design:paramtypes", [])
            ], DashboardComponent);
            exports_1("DashboardComponent", DashboardComponent);
        }
    };
});
