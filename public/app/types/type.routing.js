System.register(["@angular/router", "../dashboard/dashboard.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, dashboard_component_1, PropertyTypeRoutes, PropertyTypeRouteProviders, TypeRouting;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }
        ],
        execute: function () {
            PropertyTypeRoutes = [
                { path: 'larangular/dashboard', component: dashboard_component_1.DashboardComponent },
            ];
            exports_1("PropertyTypeRouteProviders", PropertyTypeRouteProviders = []);
            exports_1("TypeRouting", TypeRouting = router_1.RouterModule.forChild(PropertyTypeRoutes));
        }
    };
});
