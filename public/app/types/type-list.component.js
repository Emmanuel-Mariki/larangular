System.register(["@angular/core", "./type.service"], function (exports_1, context_1) {
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
    var core_1, type_service_1, TypeListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (type_service_1_1) {
                type_service_1 = type_service_1_1;
            }
        ],
        execute: function () {
            TypeListComponent = (function () {
                function TypeListComponent(TypeService) {
                    this.TypeService = TypeService;
                    this.Type = new core_1.EventEmitter();
                    this.Id = new core_1.EventEmitter();
                    this.viewChanged = new core_1.EventEmitter();
                }
                TypeListComponent.prototype.ngOnInit = function () {
                    this.ActionTitle = 'Type list';
                    this.loadPropertyTypes();
                    //this.Type = this.Types
                };
                TypeListComponent.prototype.loadPropertyTypes = function () {
                    var _this = this;
                    this.TypeService.getPropTypes()
                        .subscribe(function (Types) { return _this.Types = Types; }, function (error) { return _this.errorMessage = error; });
                };
                TypeListComponent.prototype.ChangeView = function (event, type, id) {
                    this.viewChanged.emit(event);
                    this.Type.emit(type);
                    this.Id.emit(id);
                };
                TypeListComponent.prototype.Deactivate = function (id) {
                    var _this = this;
                    var body = { 'active': '0' };
                    this.TypeService.putPropType(id, body)
                        .subscribe(function (Types) { return _this.loadPropertyTypes(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Property type deactivated successfuly';
                    });
                };
                TypeListComponent.prototype.Activate = function (id) {
                    var _this = this;
                    var body = { 'active': '1' };
                    this.TypeService.putPropType(id, body)
                        .subscribe(function (Types) { return _this.loadPropertyTypes(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Property type activated successfuly';
                    });
                };
                TypeListComponent.prototype.confirmDeletion = function (id, title) {
                    this.ConfirmDeleteTitle = title;
                    this.DeleteId = id;
                };
                TypeListComponent.prototype.DeleteType = function () {
                    var _this = this;
                    this.TypeService.destroyPropType(this.DeleteId)
                        .subscribe(function (Types) { return _this.loadPropertyTypes(); }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.successMessage = 'Property type deleted successfuly';
                    });
                };
                return TypeListComponent;
            }());
            TypeListComponent = __decorate([
                core_1.Component({
                    selector: 'property-type-list',
                    templateUrl: './larangular/resources/assets/typescript/types/type-list.component.html',
                    styles: ["\n        th, td\n        {\n            text-align:center;\n        }\n        .btn,.title\n        {\n            margin-top:15px;\n            margin-bottom:15px;\n        }\n        .modal {\n            text-align: center;\n            padding: 0!important;\n        }\n\n        .modal:before {\n            content: '';\n            display: inline-block;\n            height: 100%;\n            vertical-align: middle;\n            margin-right: -4px;\n        }\n\n        .modal-dialog {\n            display: inline-block;\n            text-align: left;\n            vertical-align: middle;\n        }\n        .model-btn{\n            position:relative;\n            top:-8px;\n        }\n        .modal-header\n        {\n            background-color:#FFF6F4;\n            color:#2EC3C9;\n            font-weight:600;\n            border-top-left-radius: 5px;\n            border-top-right-radius: 5px;\n        }\n        .modal-footer\n        {\n            background-color:#FFF6F4;    \n            padding-top: 0px;\n            padding-bottom: 0px;\n            border-bottom-left-radius: 5px;\n            border-bottom-right-radius: 5px;\n        }\n        .modal-body{\n            color: red;\n        }\n    "],
                    inputs: [],
                    outputs: ['viewChanged', 'Type', 'Id']
                }),
                __metadata("design:paramtypes", [type_service_1.TypeService])
            ], TypeListComponent);
            exports_1("TypeListComponent", TypeListComponent);
        }
    };
});
