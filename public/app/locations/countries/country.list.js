System.register(["@angular/core", "@angular/router", "@angular/forms", "./country.service"], function (exports_1, context_1) {
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
    var core_1, router_1, forms_1, country_service_1, CountryListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (country_service_1_1) {
                country_service_1 = country_service_1_1;
            }
        ],
        execute: function () {
            /**
            * name
            */
            CountryListComponent = (function () {
                function CountryListComponent(router, route, fomBuilder, CountryService) {
                    this.router = router;
                    this.route = route;
                    this.fomBuilder = fomBuilder;
                    this.CountryService = CountryService;
                    this.term = '';
                    this.Active = true;
                    this.ActionTitle = 'Country List';
                    this.id = +this.route.snapshot.params['id'];
                }
                CountryListComponent.prototype.ngOnInit = function () {
                    if (!this.id) {
                        this.buildForm();
                        this.getCountries();
                    }
                };
                CountryListComponent.prototype.buildForm = function () {
                    this.CountryFormFilter = this.fomBuilder.group({
                        term: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required]))
                    });
                };
                CountryListComponent.prototype.getCountries = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        _this.selectedId = +params['id'];
                        _this.CountryService.getCountries().subscribe(function (Countries) { return _this.Countries = Countries; }, function (error) { return _this.errorMessage = error; });
                    });
                };
                CountryListComponent.prototype.Deactivate = function (id) {
                    var _this = this;
                    var body = { 'active': '0' };
                    this.CountryService.putCountry(id, body)
                        .subscribe(function (Countries) { return _this.getCountries(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Country deactivated successfuly';
                    });
                };
                CountryListComponent.prototype.Activate = function (id) {
                    var _this = this;
                    var body = { 'active': '1' };
                    this.CountryService.putCountry(id, body)
                        .subscribe(function (Countries) { return _this.getCountries(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Country activated successfuly';
                    });
                };
                return CountryListComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], CountryListComponent.prototype, "term", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], CountryListComponent.prototype, "ActionTitle", void 0);
            CountryListComponent = __decorate([
                core_1.Component({
                    selector: 'country-list',
                    templateUrl: './larangular/resources/assets/typescript/locations/countries/country.list.html',
                    styles: ["\n        th, td\n        {\n            text-align:center;\n        }\n        #term\n        {\n            position:relative;\n            top:3px;\n            border-radius:3px;\n        }\n    "],
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    router_1.ActivatedRoute,
                    forms_1.FormBuilder,
                    country_service_1.CountryService])
            ], CountryListComponent);
            exports_1("CountryListComponent", CountryListComponent);
        }
    };
});
