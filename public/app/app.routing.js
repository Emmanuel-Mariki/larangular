System.register(["@angular/router", "./home/home.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, appRoutes, appRoutingProviders, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }
        ],
        execute: function () {
            // import{ DashboardComponent } from './dashboard/dashboard.component';
            // import{ ProfileComponent } from './dashboard/profile/profile';
            // import{ AdminComponent } from './dashboard/admin/admin';
            appRoutes = [
                { path: 'larangular', component: home_component_1.HomeComponent },
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
