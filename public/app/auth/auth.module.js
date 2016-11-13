System.register(["@angular/core", "@angular/common", "@angular/forms", "./login/login.service", "./auth.component", "./login/login", "./register/register.service", "./register/register", "./forgot/forgot.pass", "./auth.routing"], function (exports_1, context_1) {
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
    var core_1, common_1, forms_1, login_service_1, auth_component_1, login_1, register_service_1, register_1, forgot_pass_1, auth_routing_1, AuthModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (auth_component_1_1) {
                auth_component_1 = auth_component_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (register_service_1_1) {
                register_service_1 = register_service_1_1;
            },
            function (register_1_1) {
                register_1 = register_1_1;
            },
            function (forgot_pass_1_1) {
                forgot_pass_1 = forgot_pass_1_1;
            },
            function (auth_routing_1_1) {
                auth_routing_1 = auth_routing_1_1;
            }
        ],
        execute: function () {
            AuthModule = (function () {
                function AuthModule() {
                }
                return AuthModule;
            }());
            AuthModule = __decorate([
                core_1.NgModule({
                    imports: [
                        auth_routing_1.AuthRouting,
                        forms_1.FormsModule,
                        common_1.CommonModule,
                        forms_1.ReactiveFormsModule,
                    ],
                    declarations: [
                        auth_component_1.AuthComponent,
                        login_1.LoginComponent,
                        register_1.RegisterComponent,
                        forgot_pass_1.ForgotPassComponent,
                    ],
                    exports: [
                        auth_component_1.AuthComponent,
                    ],
                    providers: [register_service_1.RegisterService, login_service_1.LoginService, auth_routing_1.AuthRouteProviders]
                }),
                __metadata("design:paramtypes", [])
            ], AuthModule);
            exports_1("AuthModule", AuthModule);
        }
    };
});
