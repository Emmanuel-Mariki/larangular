System.register(["@angular/core", "@angular/router", "@angular/forms", "./district.service"], function (exports_1, context_1) {
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
    var core_1, router_1, forms_1, district_service_1, DistrictListComponent;
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
            function (district_service_1_1) {
                district_service_1 = district_service_1_1;
            }
        ],
        execute: function () {
            /**
            * name
            */
            DistrictListComponent = (function () {
                function DistrictListComponent(router, route, fomBuilder, DistrictService) {
                    this.router = router;
                    this.route = route;
                    this.fomBuilder = fomBuilder;
                    this.DistrictService = DistrictService;
                    this.term = '';
                    this.Active = true;
                    this.ActionTitle = 'District List';
                    this.id = +this.route.snapshot.params['id'];
                    this.name = this.route.snapshot.params['name'];
                }
                DistrictListComponent.prototype.ngOnInit = function () {
                    this.buildForm();
                    if (!this.id && !this.name) {
                        this.getDistricts();
                    }
                };
                DistrictListComponent.prototype.buildForm = function () {
                    this.DistrictFormFilter = this.fomBuilder.group({
                        term: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required]))
                    });
                };
                DistrictListComponent.prototype.getDistricts = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        _this.selectedId = +params['id'];
                        _this.DistrictService.getDistricts().subscribe(function (Districts) { return _this.Districts = Districts; }, function (error) { return _this.errorMessage = error; });
                    });
                };
                DistrictListComponent.prototype.Deactivate = function (id) {
                    var _this = this;
                    var body = { 'active': '0' };
                    this.DistrictService.putDistrict(id, body)
                        .subscribe(function (Districts) { return _this.getDistricts(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'District deactivated successfuly';
                    });
                };
                DistrictListComponent.prototype.Activate = function (id) {
                    var _this = this;
                    var body = { 'active': '1' };
                    this.DistrictService.putDistrict(id, body)
                        .subscribe(function (Districts) { return _this.getDistricts(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'District activated successfuly';
                    });
                };
                return DistrictListComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], DistrictListComponent.prototype, "term", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], DistrictListComponent.prototype, "ActionTitle", void 0);
            DistrictListComponent = __decorate([
                core_1.Component({
                    selector: 'district-list',
                    templateUrl: './larangular/resources/assets/typescript/locations/districts/district.list.html',
                    styles: ["\n        th, td\n        {\n            text-align:center;\n        }\n        #term\n        {\n            position:relative;\n            top:3px;\n            border-radius:3px;\n        }\n    "],
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    router_1.ActivatedRoute,
                    forms_1.FormBuilder,
                    district_service_1.DistrictService])
            ], DistrictListComponent);
            exports_1("DistrictListComponent", DistrictListComponent);
        }
    };
});
