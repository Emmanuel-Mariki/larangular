System.register(["@angular/router", "./cat.component", "./cat.form", "./cat.details"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, cat_component_1, cat_form_1, cat_details_1, CatRoutes, CatRouteProviders, CatRouting;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cat_component_1_1) {
                cat_component_1 = cat_component_1_1;
            },
            function (cat_form_1_1) {
                cat_form_1 = cat_form_1_1;
            },
            function (cat_details_1_1) {
                cat_details_1 = cat_details_1_1;
            }
        ],
        execute: function () {
            CatRoutes = [
                {
                    path: 'larangular/dashboard/property-categories',
                    children: [
                        {
                            path: '',
                            component: cat_component_1.CatComponent
                        },
                        {
                            path: 'new',
                            component: cat_form_1.CatFormComponent
                        },
                        {
                            path: ':id',
                            component: cat_details_1.CatDetailsComponent
                        },
                        {
                            path: 'edit/:id',
                            component: cat_form_1.CatFormComponent
                        },
                    ]
                }
            ];
            exports_1("CatRouteProviders", CatRouteProviders = []);
            exports_1("CatRouting", CatRouting = router_1.RouterModule.forChild(CatRoutes));
        }
    };
});
