System.register(['@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1;
    var LeftNavRoutes, LeftNavRouteProviders, LeftNavRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LeftNavRoutes = [];
            exports_1("LeftNavRouteProviders", LeftNavRouteProviders = []);
            exports_1("LeftNavRouting", LeftNavRouting = router_1.RouterModule.forChild(LeftNavRoutes));
        }
    }
});
