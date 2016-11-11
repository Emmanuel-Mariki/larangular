import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions,Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { City } from './city';
import { Country } from '../countries/country';

@Injectable()

/**
 * name
 */
export class CityService {

  private headers = new Headers({ 'Content-Type': 'application/jsonp'});

  private URL = 'http://localhost/larangular/cities';  // URL to web api
  private CountryUrl = 'http://localhost/larangular/countries/NoRelation'; 
  private CityCountryUrl = 'http://localhost/larangular/dashboard/countries'; 

  constructor(private http: Http) { }

  getCities(): Observable <City[]>
  {
    return this.http.get(this.URL)
                    .map(res=>res.json())
                    .catch(this.ThrowError);

  }

  getCountryCities(name:string): Observable <City[]>
  {
    return this.http.get(this.CityCountryUrl+'/'+name+'/cities')
                    .map(res=>res.json())
                    .catch(this.ThrowError);

  }
  getCountries(): Observable <Country[]>
  {
    return this.http.get(this.CountryUrl)
                    .map(res=>res.json())
                    .catch(this.ThrowError);

  }

  getCity(id:number):Observable <City[]>
  {
    return this.http.get(this.URL+'/'+id)
                    .map(res=>res.json())
                    .catch(this.ThrowError);
  }

  putCity(id:number,City):Observable <City[]>
  {
    let body = JSON.stringify({ City });
    let options = new RequestOptions({ headers: this.headers });
    return this.http.put(this.URL+'/'+id, body, options)
                    .map(res=>res.json())
                    .catch(this.ThrowError);
  }

  postCity(City):Observable <City[]>
  {
    let body = JSON.stringify({ City });
    let options = new RequestOptions({ headers: this.headers });
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