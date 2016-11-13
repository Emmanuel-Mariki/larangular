System.register(["@angular/core", "@angular/router", "@angular/forms", "./city.service"], function (exports_1, context_1) {
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
    var core_1, router_1, forms_1, city_service_1, CityListComponent;
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
            function (city_service_1_1) {
                city_service_1 = city_service_1_1;
            }
        ],
        execute: function () {
            /**
            * name
            */
            CityListComponent = (function () {
                function CityListComponent(router, route, fomBuilder, CityService) {
                    this.router = router;
                    this.route = route;
                    this.fomBuilder = fomBuilder;
                    this.CityService = CityService;
                    this.term = '';
                    this.Active = true;
                    this.ActionTitle = 'City List';
                    this.id = +this.route.snapshot.params['id'];
                    this.name = this.route.snapshot.params['name'];
                }
                CityListComponent.prototype.ngOnInit = function () {
                    this.buildForm();
                    if (!this.id && !this.name) {
                        this.getCities();
                    }
                    else if (this.name) {
                        this.getCountryCities();
                    }
                };
                CityListComponent.prototype.buildForm = function () {
                    this.CityFormFilter = this.fomBuilder.group({
                        term: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required]))
                    });
                };
                CityListComponent.prototype.getCities = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        _this.selectedId = +params['id'];
                        _this.CityService.getCities().subscribe(function (Cities) { return _this.Cities = Cities; }, function (error) { return _this.errorMessage = error; });
                    });
                };
                CityListComponent.prototype.getCountryCities = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        _this.selectedId = +params['id'];
                        _this.CityService.getCountryCities(_this.name).subscribe(function (Cities) { return _this.Cities = Cities; }, function (error) { return _this.errorMessage = error; });
                    });
                };
                CityListComponent.prototype.Deactivate = function (id) {
                    var _this = this;
                    var body = { 'active': '0' };
                    this.CityService.putCity(id, body)
                        .subscribe(function (Cities) { return _this.getCities(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'City deactivated successfuly';
                    });
                };
                CityListComponent.prototype.Activate = function (id) {
                    var _this = this;
                    var body = { 'active': '1' };
                    this.CityService.putCity(id, body)
                        .subscribe(function (Cities) { return _this.getCities(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'City activated successfuly';
                    });
                };
                return CityListComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], CityListComponent.prototype, "term", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], CityListComponent.prototype, "ActionTitle", void 0);
            CityListComponent = __decorate([
                core_1.Component({
                    selector: 'city-list',
                    templateUrl: './larangular/resources/assets/typescript/locations/cities/city.list.html',
                    styles: ["\n        th, td\n        {\n            text-align:center;\n        }\n        #term\n        {\n            position:relative;\n            top:3px;\n            border-radius:3px;\n        }\n    "],
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    router_1.ActivatedRoute,
                    forms_1.FormBuilder,
                    city_service_1.CityService])
            ], CityListComponent);
            exports_1("CityListComponent", CityListComponent);
        }
    };
});
