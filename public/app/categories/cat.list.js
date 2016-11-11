System.register(['@angular/core', '@angular/router', "@angular/forms", './cat.service'], function(exports_1, context_1) {
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
    var core_1, router_1, forms_1, cat_service_1;
    var CatListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (cat_service_1_1) {
                cat_service_1 = cat_service_1_1;
            }],
        execute: function() {
            CatListComponent = (function () {
                function CatListComponent(router, route, fomBuilder, CateogoryService) {
                    this.router = router;
                    this.route = route;
                    this.fomBuilder = fomBuilder;
                    this.CateogoryService = CateogoryService;
                    this.term = '';
                    this.Active = true;
                    this.ActionTitle = 'Category List';
                    this.id = +this.route.snapshot.params['id'];
                }
                CatListComponent.prototype.ngOnInit = function () {
                    if (!this.id) {
                        this.buildForm();
                        this.getCategories();
                    }
                };
                CatListComponent.prototype.buildForm = function () {
                    this.CatFormFilter = this.fomBuilder.group({
                        term: this.fomBuilder.control(null, forms_1.Validators.compose([forms_1.Validators.required]))
                    });
                };
                CatListComponent.prototype.getCategories = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        _this.selectedId = +params['id'];
                        _this.CateogoryService.getCategories().subscribe(function (Categories) { return _this.Categories = Categories; }, function (error) { return _this.errorMessage = error; });
                    });
                };
                CatListComponent.prototype.Deactivate = function (id) {
                    var _this = this;
                    var body = { 'active': '0' };
                    this.CateogoryService.putCategory(id, body)
                        .subscribe(function (Categories) { return _this.getCategories(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Category deactivated successfuly';
                    });
                };
                CatListComponent.prototype.Activate = function (id) {
                    var _this = this;
                    var body = { 'active': '1' };
                    this.CateogoryService.putCategory(id, body)
                        .subscribe(function (Categories) { return _this.getCategories(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Category activated successfuly';
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CatListComponent.prototype, "term", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], CatListComponent.prototype, "ActionTitle", void 0);
                CatListComponent = __decorate([
                    core_1.Component({
                        selector: 'prop-cat-list',
                        templateUrl: './larangular/resources/assets/typescript/categories/cat.list.html',
                        styles: ["\n        th, td\n        {\n            text-align:center;\n        }\n        #term\n        {\n            position:relative;\n            top:3px;\n            border-radius:3px;\n        }\n    "],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder, cat_service_1.CatService])
                ], CatListComponent);
                return CatListComponent;
            }());
            exports_1("CatListComponent", CatListComponent);
        }
    }
});
