System.register(['@angular/router', './dashboard.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, dashboard_component_1;
    var DashboardRoutes, DashboardRouteProviders, DashboardRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            DashboardRoutes = [
                {
                    path: 'dashboard',
                    children: [
                        {
                            path: '',
                            component: dashboard_component_1.DashboardComponent
                        }
                    ]
                }
            ];
            exports_1("DashboardRouteProviders", DashboardRouteProviders = []);
            exports_1("DashboardRouting", DashboardRouting = router_1.RouterModule.forChild(DashboardRoutes));
        }
    }
});
