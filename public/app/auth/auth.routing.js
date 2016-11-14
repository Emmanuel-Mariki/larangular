System.register(["@angular/router", "./auth.component", "./register/register", "./forgot/forgot.pass"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, auth_component_1, register_1, forgot_pass_1, AuthRoutes, AuthRouteProviders, AuthRouting;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_component_1_1) {
                auth_component_1 = auth_component_1_1;
            },
            function (register_1_1) {
                register_1 = register_1_1;
            },
            function (forgot_pass_1_1) {
                forgot_pass_1 = forgot_pass_1_1;
            }
        ],
        execute: function () {
            AuthRoutes = [
                {
                    path: 'larangular',
                    children: [
                        {
                            path: 'login',
                            component: auth_component_1.AuthComponent
                        },
                        {
                            path: 'forgot-password',
                            component: forgot_pass_1.ForgotPassComponent
                        },
                        {
                            path: 'register',
                            component: register_1.RegisterComponent
                        },
                    ]
                }
            ];
            exports_1("AuthRouteProviders", AuthRouteProviders = []);
            exports_1("AuthRouting", AuthRouting = router_1.RouterModule.forChild(AuthRoutes));
        }
    };
});
