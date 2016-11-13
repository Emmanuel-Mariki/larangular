System.register(["@angular/router", "./countries/country.component", "./countries/country.form", "./countries/country.details", "./countries/country.city", "./cities/city.component", "./cities/city.form", "./cities/city.details", "./districts/district.component", "./districts/district.form"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, country_component_1, country_form_1, country_details_1, country_city_1, city_component_1, city_form_1, city_details_1, district_component_1, district_form_1, LocationRoutes, LocationRouteProviders, LocationRouting;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (country_component_1_1) {
                country_component_1 = country_component_1_1;
            },
            function (country_form_1_1) {
                country_form_1 = country_form_1_1;
            },
            function (country_details_1_1) {
                country_details_1 = country_details_1_1;
            },
            function (country_city_1_1) {
                country_city_1 = country_city_1_1;
            },
            function (city_component_1_1) {
                city_component_1 = city_component_1_1;
            },
            function (city_form_1_1) {
                city_form_1 = city_form_1_1;
            },
            function (city_details_1_1) {
                city_details_1 = city_details_1_1;
            },
            function (district_component_1_1) {
                district_component_1 = district_component_1_1;
            },
            function (district_form_1_1) {
                district_form_1 = district_form_1_1;
            }
        ],
        execute: function () {
            LocationRoutes = [
                {
                    path: 'larangular/dashboard/countries',
                    children: [
                        {
                            path: '',
                            component: country_component_1.CountryComponent
                        },
                        {
                            path: 'new',
                            component: country_form_1.CountryFormComponent
                        },
                        {
                            path: ':id',
                            component: country_details_1.CountryDetailsComponent
                        },
                        {
                            path: 'edit/:id',
                            component: country_form_1.CountryFormComponent
                        },
                        {
                            path: ':name/cities',
                            component: country_city_1.CountryCityListComponent
                        },
                        {
                            path: ':name/cities/edit/:id',
                            component: city_form_1.CityFormComponent
                        },
                        {
                            path: ':name/cities/:id',
                            component: city_details_1.CityDetailsComponent
                        },
                    ]
                },
                {
                    path: 'larangular/dashboard/cities',
                    children: [
                        {
                            path: '',
                            component: city_component_1.CityComponent
                        },
                        {
                            path: 'new',
                            component: city_form_1.CityFormComponent
                        },
                        {
                            path: ':id',
                            component: city_details_1.CityDetailsComponent
                        },
                        {
                            path: 'edit/:id',
                            component: city_form_1.CityFormComponent
                        },
                    ]
                },
                {
                    path: 'larangular/dashboard/districts',
                    children: [
                        {
                            path: '',
                            component: district_component_1.DistrictComponent
                        },
                        {
                            path: 'new',
                            component: district_form_1.DistrictFormComponent
                        },
                        // {
                        //      path:':id',
                        //      component:DistrictDetailsComponent
                        // },    
                        {
                            path: 'edit/:id',
                            component: district_form_1.DistrictFormComponent
                        },
                    ]
                }
            ];
            exports_1("LocationRouteProviders", LocationRouteProviders = []);
            exports_1("LocationRouting", LocationRouting = router_1.RouterModule.forChild(LocationRoutes));
        }
    };
});
