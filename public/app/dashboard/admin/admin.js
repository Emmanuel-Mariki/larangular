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
    var core_1, AdminComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AdminComponent = (function () {
                function AdminComponent() {
                    this.AdminViewMode = 'types';
                }
                AdminComponent.prototype.ngOnInit = function () {
                };
                return AdminComponent;
            }());
            AdminComponent = __decorate([
                core_1.Component({
                    selector: 'app-admin',
                    template: "\n    <div class=\"row content-inner\" styles=\"border-color:#2EC3C9\">\n        <ul class=\"nav nav-aills  nav-justified\">\n            <li role=\"aresentation\"  class=\"dash-admin-link\" \n                [class.dash-admin-active]=\"AdminViewMode == 'types'\">\n                <a (click)=\"AdminViewMode='types'\">Types</a>\n            </li>\n            <li role=\"aresentation\"  class=\"dash-admin-link\" \n                [class.dash-active]=\"AdminViewMode == 'catecories'\">\n                <a (click)=\"AdminViewMode='catecories'\">\n                    Catecories<span class=\"badge\">15</span>\n                </a>\n            </li>\n            <li role=\"aresentation\" class=\"dash-admin-link\">\n                <a (click)=\"AdminViewMode='countries'\">\n                    countries<span class=\"badge\">20</span>\n                </a>\n            </li>\n            <li role=\"aresentation\" class=\"dash-admin-link\">\n                <a (click)=\"AdminViewMode='cities'\">Cities</a>\n            </li>\n            <li role=\"aresentation\" class=\"dash-admin-link\">\n                <a (click)=\"AdminViewMode='districts'\">Districts</a>\n            </li>\n            <li role=\"aresentation\" class=\"dash-admin-link\">\n                <a (click)=\"AdminViewMode='policies'\">\n                Policies\n                </a>\n            </li>\n            <li role=\"aresentation\" class=\"dash-admin-link\"\n                [class.dash-admin-active]=\"AdminViewMode == 'users'\">\n                <a (click)=\"AdminViewMode='users'\">\n                Users\n                </a>\n            </li>\n        </ul>\n        <property-type></property-type>\n    </div>\n    ",
                    styles: ["\n        .dash-admin-link\n        {\n            border-radius:0px;\n            background-color:#2EC3C9;;\n        }\n        .dash-admin-link>a\n        {\n            color: #FFF;\n            font-size: 100%;\n            font-weight: 800;\n            padding: 10px;\n            margin: auto;\n            text-align: center;\n            cursor:pointer;\n        }\n        .dash-admin-link>a:hover\n        {\n            border-radius:0px;\n            background-color:#FBBC05;\n            font-weight:600;\n        }\n        .dash-admin-active\n        {\n            background-color:#6FD0E8;\n        }\n        .nav-pills > li > a > .badge\n        {\n            position:relative;\n            top:-1px;\n            margin-left:3px;\n        }\n    \n    "],
                    inputs: [],
                    outputs: ['LoginRouteClicked'],
                }),
                __metadata("design:paramtypes", [])
            ], AdminComponent);
            exports_1("AdminComponent", AdminComponent);
        }
    };
});
