import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions,Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Login } from './log';

@Injectable()

/**
 * name
 */
export class LoginService {

  private URL = 'http://localhost/larangular/login'; 

  private headers = new Headers({ 'Content-Type': 'application/jsonp', 'X-CSRF-TOKEN': this.getToken()});

  constructor(private http: Http) { }

  getToken() {
         return document.querySelector('meta[property="csrf-token"]')['content'];
  }

  getCredentials(Login):Observable <Login[]>
  {
    let body = JSON.stringify({ Login });
    let options = new RequestOptions({ headers: this.headers});
    return this.http.post(this.URL, body, options)
               .map(this.ExctractData)
               .catch(this.ThrowError);
  }

  private ThrowError (error: any) 
  {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
    return Observable.throw(errMsg);
  }

  private ExctractData(res:Response)
  {
    let body    = res.json();
    return body.data || {};
  }
}