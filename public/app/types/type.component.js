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
    var core_1, TypeComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            TypeComponent = (function () {
                function TypeComponent() {
                }
                TypeComponent.prototype.ngOnInit = function () {
                    this.view = 'list';
                };
                TypeComponent.prototype.changeView = function (event) {
                    this.view = event;
                };
                TypeComponent.prototype.Notify = function (event) {
                    this.successMessage = event;
                };
                TypeComponent.prototype.getId = function (event) {
                    this.id = event;
                    console.log(this.id);
                };
                TypeComponent.prototype.getProperty = function (event) {
                    this.Type = event;
                };
                return TypeComponent;
            }());
            TypeComponent = __decorate([
                core_1.Component({
                    selector: 'property-type',
                    template: "\n        <property-type-list *ngIf=\"view =='list'\"\n                            (viewChanged)=\"changeView($event)\"\n                            (Id)=\"getId($event)\"\n                            (Type)=\"getProperty($event)\">\n        </property-type-list>\n        <property-type-form *ngIf=\"view =='new'\" \n                            (viewChanged)=\"changeView($event)\" \n                            (NoficationMsg)=\"Notify($event)\"\n                            [TypeViewMode] =\"view\">\n        </property-type-form>\n        <property-type-form *ngIf=\"view =='edit'\" \n                            (viewChanged)=\"changeView($event)\" \n                            (NoficationMsg)=\"Notify($event)\"\n                            [IDPROPTYP]=\"id\" [types]=\"Type\"\n                            [TypeViewMode] =\"view\">\n        </property-type-form>\n        <property-type-view *ngIf=\"view =='detail'\"\n                            (viewChanged)=\"changeView($event)\" \n                            [IDPROPTYP]=\"id\" [type]=\"Type\">\n        </property-type-view>\n    ",
                    styles: ["\n\n    "]
                }),
                __metadata("design:paramtypes", [])
            ], TypeComponent);
            exports_1("TypeComponent", TypeComponent);
        }
    };
});
