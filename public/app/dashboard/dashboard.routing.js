System.register(['@angular/router', './dashboard.component', './profile/profile'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, dashboard_component_1, profile_1;
    var DashboardRoutes, DashboardRouteProviders, DashboardRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (profile_1_1) {
                profile_1 = profile_1_1;
            }],
        execute: function() {
            DashboardRoutes = [
                {
                    path: 'dashboard',
                    children: [
                        {
                            path: '',
                            component: dashboard_component_1.DashboardComponent
                        },
                        {
                            path: 'profile',
                            component: profile_1.ProfileComponent
                        }
                    ]
                }
            ];
            exports_1("DashboardRouteProviders", DashboardRouteProviders = []);
            exports_1("DashboardRouting", DashboardRouting = router_1.RouterModule.forChild(DashboardRoutes));
        }
    }
});
