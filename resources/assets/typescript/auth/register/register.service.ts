import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions,Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

class Register
{
    //name:string;
    email:string;
    password:string;
    password_confirmation:string;
}

@Injectable()

/**
 * name
 */
export class RegisterService {

  private headers = new Headers({ 'Content-Type': 'application/jsonp'});

  private TypeUrl = 'http://localhost/larangular/register';  // URL to web api

  constructor(private http: Http) { }

  postRegister(Register):Observable <Register[]>
  {
    let body = JSON.stringify({ Register });
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.TypeUrl, body, options)
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