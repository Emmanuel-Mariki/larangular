System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/add/observable/throw', 'rxjs/add/operator/catch', 'rxjs/add/operator/map', './log'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, log_1;
    var LoginService;
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
            function (log_1_1) {
                log_1 = log_1_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/jsonp' });
                    this.URL = 'http://localhost:8080/login?'; // URL to web api
                }
                LoginService.prototype.getCredentials = function (useraname, password) {
                    var body = JSON.stringify({ Login: log_1.Login });
                    var options = new http_1.RequestOptions({ headers: this.headers });
                    return this.http.get(this.URL + 'username=' + useraname + '&password=' + password)
                        .map(this.ExctractData)
                        .catch(this.ThrowError);
                };
                LoginService.prototype.ThrowError = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                LoginService.prototype.ExctractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
