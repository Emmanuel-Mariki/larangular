System.register(['@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1;
    var TopNavRoutes, TopNavRouteProviders, TopNavRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TopNavRoutes = [];
            exports_1("TopNavRouteProviders", TopNavRouteProviders = []);
            exports_1("TopNavRouting", TopNavRouting = router_1.RouterModule.forChild(TopNavRoutes));
        }
    }
});
