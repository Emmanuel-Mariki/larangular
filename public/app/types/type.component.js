System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var TypeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TypeComponent = (function () {
                function TypeComponent() {
                    this.ActionTitle = 'Type list';
                }
                TypeComponent = __decorate([
                    core_1.Component({
                        selector: 'property-type',
                        template: "\n        <property-type-list></property-type-list>\n    ",
                        styles: ["\n        .panel-default>.panel-heading>.title\n        {\n            color: #663663;\n            font-family: Arial, Helvetica, sans-serif;\n            font-size: 200%;\n        }\n        .panel-default>.panel-heading>.btn\n        {\n            position: relative;\n            top: -5px;\n            margin-left:5px;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TypeComponent);
                return TypeComponent;
            }());
            exports_1("TypeComponent", TypeComponent);
        }
    }
});
