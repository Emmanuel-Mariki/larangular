System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/add/observable/throw', 'rxjs/add/operator/catch', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var DistrictService;
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
            function (_3) {}],
        execute: function() {
            DistrictService = (function () {
                function DistrictService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/jsonp' });
                    this.URL = 'http://localhost/larangular/districts'; // URL to web api
                    this.DistrictUrl = 'http://localhost/larangular/cities/NoRelation';
                    this.CountryURL = 'http://localhost/larangular/countries';
                }
                DistrictService.prototype.getDistricts = function () {
                    return this.http.get(this.URL)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                DistrictService.prototype.getCities = function () {
                    return this.http.get(this.DistrictUrl)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                DistrictService.prototype.getCountries = function () {
                    return this.http.get(this.CountryURL)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                DistrictService.prototype.getDistrict = function (id) {
                    return this.http.get(this.URL + '/' + id)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                DistrictService.prototype.putDistrict = function (id, District) {
                    var body = JSON.stringify({ District: District });
                    var options = new http_1.RequestOptions({ headers: this.headers });
                    return this.http.put(this.URL + '/' + id, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                DistrictService.prototype.postDistrict = function (District) {
                    var body = JSON.stringify({ District: District });
                    var options = new http_1.RequestOptions({ headers: this.headers });
                    return this.http.post(this.URL, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                DistrictService.prototype.ThrowError = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                DistrictService.prototype.ExctractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                DistrictService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DistrictService);
                return DistrictService;
            }());
            exports_1("DistrictService", DistrictService);
        }
    }
});
