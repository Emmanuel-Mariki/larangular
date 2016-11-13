System.register(["@angular/core", "@angular/http", "rxjs/Observable", "rxjs/add/observable/throw", "rxjs/add/operator/catch", "rxjs/add/operator/map"], function (exports_1, context_1) {
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
    var core_1, http_1, Observable_1, CountryService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            }
        ],
        execute: function () {
            /**
             * name
             */
            CountryService = (function () {
                function CountryService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/jsonp' });
                    this.TypeUrl = 'http://localhost/larangular/countries'; // URL to web api
                }
                CountryService.prototype.getCountries = function () {
                    return this.http.get(this.TypeUrl)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                CountryService.prototype.getCountry = function (id) {
                    return this.http.get(this.TypeUrl + '/' + id)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                CountryService.prototype.putCountry = function (id, Country) {
                    var body = JSON.stringify({ Country: Country });
                    var options = new http_1.RequestOptions({ headers: this.headers });
                    return this.http.put(this.TypeUrl + '/' + id, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.ThrowError);
                };
                CountryService.prototype.postCountry = function (Country) {
                    var body = JSON.stringify({ Country: Country });
                    var options = new http_1.RequestOptions({ headers: this.headers });
                    return this.http.post(this.TypeUrl, body, options)
                        .map(this.ExctractData)
                        .catch(this.ThrowError);
                };
                CountryService.prototype.ThrowError = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                CountryService.prototype.ExctractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                return CountryService;
            }());
            CountryService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], CountryService);
            exports_1("CountryService", CountryService);
        }
    };
});
