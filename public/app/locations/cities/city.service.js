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
    var CityService;
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
            CityService = (function () {
                function CityService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/jsonp' });
                    this.URL = 'http://localhost/larangular/cities'; // URL to web api
                    this.CountryUrl = 'http://localhost/larangular/countries/NoRelation';
                    this.CityCountryUrl = 'http://localhost/larangular/dashboard/countries';
                }
                CityService.prototype.getCities = function () {
                    return this.http.get(this.URL)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                CityService.prototype.getCountryCities = function (name) {
                    return this.http.get(this.CityCountryUrl + '/' + name + '/cities')
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                CityService.prototype.getCountries = function () {
                    return this.http.get(this.CountryUrl)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                CityService.prototype.getCity = function (id) {
                    return this.http.get(this.URL + '/' + id)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                CityService.prototype.putCity = function (id, City) {
                    var body = JSON.stringify({ City: City });
                    var options = new http_1.RequestOptions({ headers: this.headers });
                    return this.http.put(this.URL + '/' + id, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                CityService.prototype.postCity = function (City) {
                    var body = JSON.stringify({ City: City });
                    var options = new http_1.RequestOptions({ headers: this.headers });
                    return this.http.post(this.URL, body, options)
                        .map(this.ExctractData)
                        .catch(this.ThrowError);
                };
                CityService.prototype.ThrowError = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                CityService.prototype.ExctractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                CityService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CityService);
                return CityService;
            }());
            exports_1("CityService", CityService);
        }
    }
});
