import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions,Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Country } from './country';

@Injectable()

/**
 * name
 */
export class CountryService {

  private headers = new Headers({ 'Content-Type': 'application/jsonp'});

  private TypeUrl = 'http://localhost/larangular/countries';  // URL to web api

  constructor(private http: Http) { }

  getCountries(): Observable <Country[]>
  {
    return this.http.get(this.TypeUrl)
                    .map(res=>res.json())
                    .catch(this.ThrowError);

  }

  getCountry(id:number):Observable <Country[]>
  {
    return this.http.get(this.TypeUrl+'/'+id)
                    .map(res=>res.json())
                    .catch(this.ThrowError);
  }

  putCountry(id:number,Country):Observable <Country[]>
  {
    let body = JSON.stringify({ Country });
    let options = new RequestOptions({ headers: this.headers });
    return this.http.put(this.TypeUrl+'/'+id, body, options)
                    .map(res=>res.json())
                    .catch(this.ThrowError);
  }

  postCountry(Country):Observable <Country[]>
  {
    let body = JSON.stringify({ Country });
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