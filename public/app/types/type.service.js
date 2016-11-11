System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/add/observable/throw', 'rxjs/add/operator/catch', 'rxjs/add/operator/map', 'rxjs/add/operator/toArray'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var TypeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            TypeService = (function () {
                function TypeService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/jsonp' });
                    this.TypeUrl = 'http://localhost/larangular/types'; // URL to web api
                }
                TypeService.prototype.ThrowError = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                TypeService.prototype.ExctractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                TypeService.prototype.getPropTypes = function () {
                    return this.http.get(this.TypeUrl)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                TypeService.prototype.getPropType = function (id) {
                    return this.http.get(this.TypeUrl + '/' + id)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                TypeService.prototype.putPropType = function (id, PropertyTypes) {
                    var body = JSON.stringify({ PropertyTypes: PropertyTypes });
                    var options = new http_1.RequestOptions({ headers: this.headers });
                    return this.http.put(this.TypeUrl + '/' + id, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                TypeService.prototype.postPropType = function (PropertyTypes) {
                    var body = JSON.stringify({ PropertyTypes: PropertyTypes });
                    var options = new http_1.RequestOptions({ headers: this.headers });
                    return this.http.post(this.TypeUrl, body, options)
                        .map(this.ExctractData)
                        .catch(this.ThrowError);
                };
                TypeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TypeService);
                return TypeService;
            }());
            exports_1("TypeService", TypeService);
        }
    }
});
