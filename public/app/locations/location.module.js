System.register(["@angular/core", "@angular/common", "@angular/forms", "./location.routing", "./LocationFilterPipe", "./countries/country.service", "./countries/country.component", "./countries/country.list", "./countries/country.form", "./countries/country.details", "./countries/country.city", "./cities/city.service", "./cities/city.component", "./cities/city.list", "./cities/city.form", "./cities/city.details", "./districts/district.service", "./districts/district.component", "./districts/district.list", "./districts/district.form"], function (exports_1, context_1) {
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
    var core_1, common_1, forms_1, location_routing_1, LocationFilterPipe_1, country_service_1, country_component_1, country_list_1, country_form_1, country_details_1, country_city_1, city_service_1, city_component_1, city_list_1, city_form_1, city_details_1, district_service_1, district_component_1, district_list_1, district_form_1, LocationModule;
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
            function (location_routing_1_1) {
                location_routing_1 = location_routing_1_1;
            },
            function (LocationFilterPipe_1_1) {
                LocationFilterPipe_1 = LocationFilterPipe_1_1;
            },
            function (country_service_1_1) {
                country_service_1 = country_service_1_1;
            },
            function (country_component_1_1) {
                country_component_1 = country_component_1_1;
            },
            function (country_list_1_1) {
                country_list_1 = country_list_1_1;
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
            function (city_service_1_1) {
                city_service_1 = city_service_1_1;
            },
            function (city_component_1_1) {
                city_component_1 = city_component_1_1;
            },
            function (city_list_1_1) {
                city_list_1 = city_list_1_1;
            },
            function (city_form_1_1) {
                city_form_1 = city_form_1_1;
            },
            function (city_details_1_1) {
                city_details_1 = city_details_1_1;
            },
            function (district_service_1_1) {
                district_service_1 = district_service_1_1;
            },
            function (district_component_1_1) {
                district_component_1 = district_component_1_1;
            },
            function (district_list_1_1) {
                district_list_1 = district_list_1_1;
            },
            function (district_form_1_1) {
                district_form_1 = district_form_1_1;
            }
        ],
        execute: function () {
            LocationModule = (function () {
                function LocationModule() {
                }
                return LocationModule;
            }());
            LocationModule = __decorate([
                core_1.NgModule({
                    imports: [
                        forms_1.FormsModule,
                        common_1.CommonModule,
                        location_routing_1.LocationRouting,
                        forms_1.ReactiveFormsModule,
                    ],
                    declarations: [
                        country_component_1.CountryComponent,
                        LocationFilterPipe_1.LocationFilterPipe,
                        country_list_1.CountryListComponent,
                        country_form_1.CountryFormComponent,
                        country_details_1.CountryDetailsComponent,
                        country_city_1.CountryCityListComponent,
                        city_component_1.CityComponent,
                        city_list_1.CityListComponent,
                        city_form_1.CityFormComponent,
                        city_details_1.CityDetailsComponent,
                        district_component_1.DistrictComponent,
                        district_list_1.DistrictListComponent,
                        district_form_1.DistrictFormComponent,
                    ],
                    exports: [
                        city_component_1.CityComponent,
                        country_component_1.CountryComponent,
                        district_component_1.DistrictComponent,
                    ],
                    providers: [district_service_1.DistrictService, city_service_1.CityService, country_service_1.CountryService, location_routing_1.LocationRouteProviders]
                }),
                __metadata("design:paramtypes", [])
            ], LocationModule);
            exports_1("LocationModule", LocationModule);
        }
    };
});
