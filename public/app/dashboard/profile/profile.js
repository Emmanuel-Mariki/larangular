System.register(['@angular/core'], function(exports_1, context_1) {
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
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent() {
                }
                ProfileComponent.prototype.ngOnInit = function () { };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'app-profile',
                        templateUrl: './larangular/resources/assets/typescript/dashboard/profile/profile.html',
                        styles: ["\n        .prof-row\n        {\n             padding: 15px;\n            /* margin-top: 5px; */\n            /* margin-bottom: 5px; */\n            border-top: 1px solid;\n            border-color: #e5e6e9 #dfe0e4 #d0d1d5;\n            width: 100%;\n            position: relative;\n            left: 15px;\n            background-color: #F6F7F9;\n            cursor:pointer;\n        }\n        .prof-row:hover\n        {\n             background-color: #F5F3F3;\n        }\n        .dash-label\n        {\n            font-weight:800;\n            color:#999;\n        }\n    "],
                        inputs: [],
                        outputs: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
