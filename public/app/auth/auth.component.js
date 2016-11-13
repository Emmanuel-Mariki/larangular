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
    var core_1, AuthComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AuthComponent = (function () {
                function AuthComponent() {
                    this.LoginRoute = new core_1.EventEmitter();
                    this.ActionTitle = 'Peruzi Login!';
                }
                //private id:number = +this.route.snapshot.params['id'];
                AuthComponent.prototype.ngOnInit = function () {
                    //console.log(this.route.snapshot.url[0].path)
                    //this.LoginRoute.emit(this.route.snapshot.url[0].path)
                };
                return AuthComponent;
            }());
            AuthComponent = __decorate([
                core_1.Component({
                    selector: 'auth-service',
                    template: "\n                <app-login (LoginRoute)=\"Loginstate=$event\"></app-login>\n    ",
                    styles: ["\n    "],
                    outputs: ['LoginRoute']
                }),
                __metadata("design:paramtypes", [])
            ], AuthComponent);
            exports_1("AuthComponent", AuthComponent);
        }
    };
});
