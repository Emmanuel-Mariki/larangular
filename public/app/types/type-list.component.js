System.register(["@angular/core", '@angular/router', './type.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, type_service_1;
    var TypeListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (type_service_1_1) {
                type_service_1 = type_service_1_1;
            }],
        execute: function() {
            TypeListComponent = (function () {
                function TypeListComponent(route, router, service) {
                    this.route = route;
                    this.router = router;
                    this.service = service;
                    this.ActionTitle = 'Type list';
                    this.Active = true;
                    this.id = +this.route.snapshot.params['id'];
                }
                TypeListComponent.prototype.ngOnInit = function () {
                    if (!this.id) {
                        this.loadPropertyTypes();
                    }
                };
                TypeListComponent.prototype.loadPropertyTypes = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        _this.selectedId = +params['id'];
                        _this.service.getPropTypes().subscribe(function (PropTypes) { return _this.PropTypes = PropTypes; }, function (error) { return _this.errorMessage = error; });
                    });
                };
                TypeListComponent.prototype.Deactivate = function (id) {
                    var _this = this;
                    var body = { 'active': '0' };
                    this.service.putPropType(id, body)
                        .subscribe(function (PropTypes) { return _this.loadPropertyTypes(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Property type deactivated successfuly';
                    });
                };
                TypeListComponent.prototype.Activate = function (id) {
                    var _this = this;
                    var body = { 'active': '1' };
                    this.service.putPropType(id, body)
                        .subscribe(function (PropTypes) { return _this.loadPropertyTypes(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Property type activated successfuly';
                    });
                };
                TypeListComponent = __decorate([
                    core_1.Component({
                        selector: 'property-type-list',
                        templateUrl: './larangular/resources/assets/typescript/types/type-list.component.html',
                        styles: ["\n        th, td\n        {\n            text-align:center;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, type_service_1.TypeService])
                ], TypeListComponent);
                return TypeListComponent;
            }());
            exports_1("TypeListComponent", TypeListComponent);
        }
    }
});
