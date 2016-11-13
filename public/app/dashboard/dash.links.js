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
    var core_1, DashLinksComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            DashLinksComponent = (function () {
                function DashLinksComponent() {
                    this.showSelectedView = new core_1.EventEmitter();
                }
                DashLinksComponent.prototype.ngOnInit = function () { };
                DashLinksComponent.prototype.activateView = function (event) {
                    this.showSelectedView.emit(event);
                    console.log(event);
                };
                return DashLinksComponent;
            }());
            DashLinksComponent = __decorate([
                core_1.Component({
                    selector: 'dash-links',
                    templateUrl: './larangular/resources/assets/typescript/dashboard/link.html',
                    styles: ["\n        .dash-link\n        {\n            border-radius:0px;\n            background-color:#FBBC05;\n        }\n        .dash-link>a\n        {\n            color: #FFF;\n            font-size: 100%;\n            font-weight: 800;\n            padding: 10px;\n            margin: auto;\n            text-align: center;\n            cursor:pointer;\n        }\n        .dash-link>a:hover\n        {\n            border-radius:0px;\n            background-color:#E04F5F;\n            font-weight:600;\n        }\n        .dash-active\n        {\n            background-color:#E04F5F;\n        }\n        .nav-pills > li > a > .badge\n        {\n            position:relative;\n            top:-1px;\n            margin-left:3px;\n        }\n    "],
                    inputs: [],
                    outputs: ['showSelectedView'],
                }),
                __metadata("design:paramtypes", [])
            ], DashLinksComponent);
            exports_1("DashLinksComponent", DashLinksComponent);
        }
    };
});
