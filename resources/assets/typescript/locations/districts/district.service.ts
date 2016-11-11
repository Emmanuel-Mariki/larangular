import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions,Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { City } from '../cities/city';
import { Country } from '../countries/country';
import { District } from './district';

@Injectable()

/**
 * name
 */
export class DistrictService {

  private headers = new Headers({ 'Content-Type': 'application/jsonp'});

  private URL = 'http://localhost/larangular/districts';  // URL to web api
  private DistrictUrl = 'http://localhost/larangular/cities/NoRelation'; 
  private CountryURL = 'http://localhost/larangular/countries'; 

  constructor(private http: Http) { }

  getDistricts(): Observable <District[]>
  {
    return this.http.get(this.URL)
                    .map(res=>res.json())
                    .catch(this.ThrowError);

  }
  getCities(): Observable <City[]>
  {
    return this.http.get(this.DistrictUrl)
                    .map(res=>res.json())
                    .catch(this.ThrowError);

  }
  getCountries(): Observable <Country[]>
  {
    return this.http.get(this.CountryURL)
                    .map(res=>res.json())
                    .catch(this.ThrowError);

  }


  getDistrict(id:number):Observable <District[]>
  {
    return this.http.get(this.URL+'/'+id)
                    .map(res=>res.json())
                    .catch(this.ThrowError);
  }

  putDistrict(id:number,District):Observable <District[]>
  {
    let body = JSON.stringify({ District });
    let options = new RequestOptions({ headers: this.headers });
    return this.http.put(this.URL+'/'+id, body, options)
                    .map(res=>res.json())
                    .catch(this.ThrowError);
  }

  postDistrict(District):Observable <District[]>
  {
    let body = JSON.stringify({ District });
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.URL, body, options)
               .map(res=>res.json())
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